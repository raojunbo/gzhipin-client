import React, { Component } from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";
import Dashen from "../dashen/dashen";
import Laoban from "../laoban/laoban";
import Message from "../message/message";
import Person from "../person/person";
import NotFound from "../../components/notfound/notfound";
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { getRedirectTo } from '../../utils/util'
import { getUser } from '../../redux/actions' // 引入redux的actions


import BottomTabbar from "../bottom-tabbar/bottom-tabbar";

/**
 * 1.实现自动的登录
 *      如果cookie中有userid，发出请求获取对应的user。
 *      如果cookie中没userid，登录页面
 * 2. 如果已经登录
 *      如果根路径，根据user的type来和header计算重定向的路径。
 */
class Main extends Component {
    navList = [
        {
            path: '/laoban',
            component: Laoban,
            title: '大神列表',
            icon: 'dashen',
            text: '大神'
        },
        {
            path: '/dashen',
            component: Dashen,
            title: '老板列表',
            icon: 'laoban',
            text: '老板'
        },
        {
            path: '/message',
            component: Message,
            title: '老板列表',
            icon: 'message',
            text: '消息'
        },
        {
            path: '/person',
            component: Person,
            title: '个人中心',
            icon: 'person',
            text: '个人'
        }
    ]
    componentDidMount() {
        const userid = Cookies.get('userid')
        const { _id } = this.props.user
        if (userid && !_id) {
            this.props.getUser()
        }
    }
    render() {
        const userid = Cookies.get('userid')
        if (!userid) {
            console.log("走!userid")
            return <Navigate to='/login' />
        }
        let path = this.props.location.pathname
        console.log("开始了" + path)
        // 如果已经有过userid
        const { user } = this.props
        // 如果user没有_id，返回null。暂时不做任何显示
        if (!user._id) {
            // 让在component中走自动登录
            console.log("走!_id")
        } else {
            // 这里地方有问题
            // 如果用户有_id，且要跳转路径是'/'。根据用户类型
            // let path = this.props.location.pathname
            // if (path === '/') {
            //     let path = getRedirectTo(user.type, user.header)
            //     return <Navigate to={path} />
            // }
        }
        // 匹配了路由就显示
        return (
            <div>

                <Routes>
                    <Route path='/dasheninfo' element={<DashenInfo />}></Route>
                    <Route path='/laobaninfo' element={<LaobanInfo />}></Route>

                    {/* <Route path="/dashen" element={<Dashen />}></Route> */}
                    {/* <Route path="/laoban" element={<Laoban />}></Route> */}
                    {/* <Route path="/person" element={<Person />}></Route> */}
                    {/* <Route path="/message" element={<Message />}></Route> */}
                    {/* <Route path="/notfound" element={<NotFound />}></Route> */}
                </Routes>
                <BottomTabbar navList={navList}></BottomTabbar>
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
