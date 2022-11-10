import React, { Component } from "react";
import {
    Form,
    Input,
    Radio,
    Button
} from 'antd-mobile'

import TopNavBar from "../../components/top_nav_bar/top_nav_bar";
import Logo from "../../components/logo/logo";

import { FormItem } from "antd-mobile/es/components/form/form-item";

import { Navigate } from "react-router-dom";
import { connect } from "react-redux"; // 引入redux的connect
import { register } from '../../redux/actions' // 引入redux的actions

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: '',
            usertype: "laoban",
        }
    }
    toRegiste() {
        // 因为connect 已经设置将register放到props上。方便通过action修改store的状态
        console.log("这是Register state" + JSON.stringify(this.state))
        this.props.register(this.state)
    }
    toLogin() {
        this.setState({ ...this.state, toLogin: true })
    }
    handleChange(name, val) {
        this.setState({
            [name]: val
        })
    }
    render() {
        const { msg, redirectTo } = this.props.user

        if (redirectTo) {
            // 表示在当前路由的基础上进行跳转
            return <Navigate to={redirectTo} />
        }
        if (this.state.toLogin) {
            return <Navigate to='/login' />
        }
        return (
            <div>
                <TopNavBar>硅谷直聘</TopNavBar>
                <Logo />
                {msg ? <p className='error-msg'>{msg}</p> : null}
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
                        <Radio checked={this.state.usertype === "dashen"} onChange={(val) => this.handleChange("usertype", "dashen")}>大神</Radio>
                        &nbsp;&nbsp;
                        <Radio checked={this.state.usertype === "laoban"} onChange={(val) => this.handleChange("usertype", "laoban")}>老板</Radio>
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

// mapStateToProps  当store状态发生变化时就会调用此方法。并返回一个对象。这个对象会与组件的props合并。
// 参数为state。在state里找到需要的状态。
// 简单的理解。 设置状态发生变化是的回调。
// 这里想想。Flutter里的provider是不是更好用一点。
const mapStateToProps = (state) => {
    return { user: state.user }
}
// mapDispatchToProps 将action放置到该组件的props上，props上就能使用
const mapDispatchToProps = {
    register
}
// connect传进mapStateToProps， 传进mapDispatchToProps,返回一个容器组件。在将真实组件装Register放进入。
export default connect(mapStateToProps, mapDispatchToProps)(Register)