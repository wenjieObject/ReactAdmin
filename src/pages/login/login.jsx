import React, { Component } from 'react';
import './css/login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '../../api/ajax'


// 登录的路由组件

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }




    render() {
        return (

            <div style={{ height: '100%' }} >

                <div className='loginheader'>react admin</div>
                <div className='loginbody'>
                    <div className='loginForm'>
                        <div className='loginFormHead'>welcome to sign in</div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password" />
                            </Form.Item>


                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }

    // 1. 引入自定义axios文件路径
    // 2. 引入共用css文件（loading样式）
    // 3. 在react组件中正常写法请求url即可
    onFinish = values => {
        //console.log('Received values of form: ', this);
        axios({
            url: '/prdStdBas?pageSize=10&pageIndex=1'
        }).then(res => {
            console.log(res.data)
        })

        //this.props.history.push("/");
    };

}



export default Login;