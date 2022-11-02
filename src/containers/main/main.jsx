import React, { Component } from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { getRedirectTo } from '../../utils/util'
/**
 * 1.实现自动的登录
 *      如果cookie中有userid，发出请求获取对应的user。
 *      如果cookie中没userid，登录页面
 * 2. 如果已经登录
 *      如果根路径，根据user的type来和header计算重定向的路径。
 */
class Main extends Component {
    componentDidMount() {
        const userid = Cookies.get('userid')
        const { _id } = this.props.user
        if (userid && !_id) {
            // 发送异步请求，获取user
            console.log('发送请求')
        }
    }
    render() {
        // 读取cookie中的userid
        const userid = Cookies.get('userid')
        if (!userid) {
            console.log("走!userid")
            return <Navigate to='/login' />
        }

        // 如果已经有过userid
        const { user } = this.props
        // 如果user没有_id，返回null。暂时不做任何显示
        if (!user._id) {
            console.log("走!_id")
            // return <Navigate to='/login' />
        } else {
            // 如果用户有_id，且要跳转路径是'/'。根据用户类型
            // let path = this.props.location.pathname
            // if (path === '/') {
            // let path = getRedirectTo(user.type, user.header)
            // return <Navigate to={path} />
            // }
        }
        // 匹配某一个路由并显示
        return (
            <div>
                <Routes>
                    <Route path='/dasheninfo' element={<DashenInfo />}></Route>
                    <Route path='/laobaninfo' element={<LaobanInfo />}></Route>
                </Routes>
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
    // 发起异步的地方
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)