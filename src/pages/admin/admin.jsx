import React, { Component } from 'react';
import { Row, Col, Card, Form, Input, Button, Checkbox ,Select, Collapse } from 'antd';



 
class Admin extends Component {

    render() {
        return (

            <div style={{ width: '100%' }}>
                <Collapse defaultActiveKey={['1', '2']} >
                    <Collapse.Panel header="操作区域" key="1">

                        <Form
                            labelCol= {{ span: 8}}
                            wrapperCol= {{ span: 16}}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item  name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
        </Button>
                            </Form.Item>
                        </Form>
                    </Collapse.Panel>
                    <Collapse.Panel header="列表区" key="2">
                        <p>this is list</p>
                    </Collapse.Panel>
                </Collapse>
            </div>
        );
    }


     onFinish = values => {
        console.log('Success:', values);
    };
    
     onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };



}

export default Admin;