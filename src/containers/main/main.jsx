import React, { Component } from "react";
import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { getRedirectTo } from '../../utils/util'
import { getUser } from '../../redux/actions' // 引入redux的actions

import TopNavBar from "../../components/top_nav_bar/top_nav_bar";
import BottomTabbar from "../../components/bottom-tabbar/bottom-tabbar";

/**
 * 1.实现自动的登录
 *      如果cookie中有userid，发出请求获取对应的user。
 *      如果cookie中没userid，登录页面
 * 2. 如果已经登录
 *      如果根路径，根据user的type来和header计算重定向的路径。
 */
class Main extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     currentContentPath: 'message',
        // }

    }
    componentDidMount() {
        const userid = Cookies.get('userid')
        const { _id } = this.props.user
        if (userid && !_id) {
            this.props.getUser()
        }
    }
    onTabChanged(path) {
        // console.log("这是改变" + JSON.stringify(this.state))
        // this.setState({
        // currentContentPath: path
        // })
    }
    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            console.log("走!userid")
            return <Navigate to='/login' />
        }
        // 如果已经有过userid
        const { user } = this.props
        if (!user._id) {
            console.log("走!_id  暂时不做任何显示，让其去走网络请求")
        } else {
            // 这里地方有问题
            // 如果用户有_id，且要跳转路径是'/'。根据用户类型
            // let path = this.props.location.pathname
            // if (path === '/') {
            //     let path = getRedirectTo(user.type, user.header)
            //     return <Navigate to={path} />
            // }
        }
        // let location = useLocation();
        // const navigate = useNavigate()
        // 只有路由组件。才能使用loaction
        // console.log("这是当前路径" + JSON.stringify( location.pathname))

        // if (currentNav) {

        // }
        // let path = this.props.location.pathname
        // console.log("这是path" + path)
        // 当前选中的状态
        // let { currentContentPath } = this.state
        // if (currentContentPath.length != 0) {
        console.log("来这里了,这里有问题")
        // return <Navigate to='/login' />
        // return <Navigate to='message' />

        // return <Navigate to={currentContentPath} />
        // }

        // 显示下面的tab
        let displayLaobanTab = true
        if (user.usertype === 'laoban') {
            displayLaobanTab = false
        } else {
            displayLaobanTab = true
        }

        // const {navList} = this.props

        // 匹配了路由就显示
        return (
            <div>
                <TopNavBar title='硅谷直聘'></TopNavBar>
                <Outlet></Outlet>
                <BottomTabbar displayLaobanTab={displayLaobanTab} onTabChanged={(val) => this.onTabChanged(val)}> </BottomTabbar>
            </div>
        )
    }
}
/*
 redux是本身是脱离于react框架的。提供一个全局状态共享的路径。
 redux的connect实际上是给原有组件包装一个容器。
 1. 状态发生变化时可以局部更新这个组件。
 2. 可以通过dispatch去改变状态的值

 Flutter的provide
*/
const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
