import React, { Component } from "react";
import {
    NavBar,
    Form,
    Input,
    Button
} from 'antd-mobile'
import TopNavBar from "../../components/navbar/TopNavBar";
import Logo from "../../components/logo/logo";

import { FormItem } from "antd-mobile/es/components/form/form-item";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    

    handleChange(name, val) {
        this.state[name] = val
    }
    toLogin() {
        console.log(this.state)
    }
    toRegister() {
        this.props.history.replace("/register")
    }
    render() {
        return (
            <div>
                <TopNavBar></TopNavBar>
                <Logo />
                <Form layout='horizontal'>
                    <Form.Item label='用户名:'>
                        <Input placeholder='请输入' onChange={(val) => this.handleChange("username", val)} />
                    </Form.Item>
                    <Form.Item label='密&nbsp;&nbsp;&nbsp;码:'>
                        <Input placeholder='请输入' onChange={(val) => this.handleChange("password", val)} />
                    </Form.Item>
                   
                    <FormItem>
                        <Button color='primary' fill='solid' block onClick={() => this.toLogin()}>登&nbsp;&nbsp;&nbsp;录 </Button>
                    </FormItem>
                    <FormItem>
                        <Button block onClick={() => this.toRegister() }>还没有账号</Button>
                    </FormItem>
                </Form>

            </div>
        )
    }
}
export default Login