/*
发送ajax请求（axios）的封装
返回promise对象
*/

import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';

const Axios = axios.create({
    baseURL: 'http://10.40.3.209:5000/api/v1', // 设置请求的base url
    timeout: 20000, // 设置超时时长
})

// 设置post请求头
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 当前正在请求的数量
let requestCount = 0

// 显示loading
function showLoading() {
    if (requestCount === 0) {
        var dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin tip="加载中..." size="large" />, dom)
    }
    requestCount++
}

// 隐藏loading
function hideLoading() {

    setTimeout(() => {
        requestCount--
        if (requestCount === 0) {
            document.body.removeChild(document.getElementById('loading'))
        }
    }, 500);

}

// 请求前拦截
Axios.interceptors.request.use(config => {
    // requestCount为0，才创建loading, 避免重复创建
    if (config.headers.isLoading !== false) {
        showLoading()
    }
    return config
}, err => {
    // 判断当前请求是否设置了不显示Loading
    if (err.config.headers.isLoading !== false) {
        hideLoading()
    }
    return Promise.reject(err)
})


// 返回后拦截
Axios.interceptors.response.use(res => {
    // 判断当前请求是否设置了不显示Loading
    if (res.config.headers.isLoading !== false) {
        hideLoading()
    }
    return res
}, err => {
    if (err.config.headers.isLoading !== false) {
        hideLoading()
    }
    if (err.message === 'Network Error') {
        message.warning('网络连接异常！')
    }
    if (err.code === 'ECONNABORTED') {
        message.warning('请求超时，请重试')
    }
    return Promise.reject(err)
})

// 把组件引入，并定义成原型属性方便使用
Component.prototype.$axios = Axios

export default Axios