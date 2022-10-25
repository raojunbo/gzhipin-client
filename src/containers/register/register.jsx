import React, { Component } from "react";
import {
    Form,
    Input,
    Radio,
    Button
} from 'antd-mobile'
import TopNavBar from "../../components/navbar/TopNavBar";
import Logo from "../../components/logo/logo";

import { FormItem } from "antd-mobile/es/components/form/form-item";
import { connect } from "react-redux"; // 这里是redux的内容
import { register } from '../../redux/actions' // 引入redux的actions
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: '',
            usertype: "laoban"
        }
    }
    toRegiste() {
        this.props.register(this.state)
    }
    toLogin() {
        console.log(this.state)
        this.history.push("/login")
    }
    handleChange(name, val) {
        this.state[name] = val
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
                    <Form.Item label='确认密码:'>
                        <Input placeholder='请输入' onChange={(val) => this.handleChange("password2", val)} />
                    </Form.Item>
                    <Form.Item label='用户类型:'>
                        <Radio checked={this.usertype == "laoban"} onChange={(val) => this.handleChange("usertype", "laoban")}>大神</Radio>
                        &nbsp;&nbsp;
                        <Radio checked={this.usertype == "dashen"} onChange={(val) => this.handleChange("usertype", "dashen")}>老板</Radio>
                    </Form.Item>
                    <FormItem>
                        <Button color='primary' fill='solid' block onClick={() => this.toRegiste()}>注&nbsp;&nbsp;&nbsp;册 </Button>
                    </FormItem>
                    <FormItem>
                        <Button block onClick={() => this.toLogin()}>已有账户</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
// ???
export default connect(state => ({}), { register })(Register)