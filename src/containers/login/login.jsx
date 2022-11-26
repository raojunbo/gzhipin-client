import React, { Component } from "react";
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'

import Logo from "../../components/logo/logo";
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
        this.props.login(this.state)
    }
    toRegister() {
        this.setState({ ...this.state, toRegister: true })
    }
    render() {
        const { msg, redirectTo } = this.props.user
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
                <NavBar>硅谷直聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        {msg ? <p className='error-msg'>{msg}</p> : null}
                        <InputItem
                            placeholder='输入用户名'
                            onChange={val => this.handleChange('username', val)}
                        >
                            用户名:
                        </InputItem>

                        <WhiteSpace />

                        <InputItem
                            type='password'
                            placeholder='输入密码'
                            onChange={val => this.handleChange('password', val)}
                        >
                            密&nbsp;&nbsp;&nbsp;码:
                        </InputItem>

                        <WhiteSpace />

                        <Button type='primary' onClick={() => this.toLogin()}>登&nbsp;&nbsp;&nbsp;陆</Button>

                        <WhiteSpace />

                        <Button onClick={this.toRegister}>还没有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}
// mapDispatchToProps 将action放置到该组件的props上，props上就能使用
const mapDispatchToProps = {
    login
}
// connect传进mapStateToProps， 传进mapDispatchToProps,返回一个容器组件。在将真实组件装Register放进入。
export default connect(mapStateToProps, mapDispatchToProps)(Login)