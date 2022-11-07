import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import {
    NavBar,
    Form,
    Input,
    Button
} from 'antd-mobile'


import TopNavBar from "../../components/top_nav_bar/top_nav_bar";
import Logo from "../../components/logo/logo";

import { FormItem } from "antd-mobile/es/components/form/form-item";

import { Navigate } from "react-router-dom";// 引入Navgiate
import { connect } from "react-redux"; // 引入redux的connect
import { login } from '../../redux/actions' // 引入redux的actions

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange(name, val) {
        this.setState({
            [name]: val
        })
    }
    toLogin() {
        // 调用props里的login的redux方法
        this.props.login(this.state)
    }
    toRegister() {
        this.setState({ ...this.state, toRegister: true })
    }
    render() {
        const { msg, redirectTo } = this.props.user
        console.log("这是Login props" + JSON.stringify(this.props))
        console.log("这是Login state" + JSON.stringify(this.state))
        // 登录成功后会给出路由跳转
        if (redirectTo) {
            return <Navigate to={redirectTo} />
        }
        // 修改了状态给出跳转
        if (this.state.toRegister) {
            return <Navigate to='/register' />
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

                    <FormItem>
                        <Button color='primary' fill='solid' block onClick={() => this.toLogin()}>登&nbsp;&nbsp;&nbsp;录 </Button>
                    </FormItem>
                    <FormItem>
                        <Button block onClick={() => this.toRegister()}>还没有账号</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
// export default Login

const mapStateToProps = (state) => {
    return { user: state.user }
}
// mapDispatchToProps 将action放置到该组件的props上，props上就能使用
const mapDispatchToProps = {
    login
}
// connect传进mapStateToProps， 传进mapDispatchToProps,返回一个容器组件。在将真实组件装Register放进入。
export default connect(mapStateToProps, mapDispatchToProps)(Login)