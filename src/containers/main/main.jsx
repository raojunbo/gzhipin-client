import React, { Component } from "react";
import { Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import Cookies from 'js-cookie'

import { getRedirectTo } from '../../utils/util'
import { getUser } from '../../redux/actions' // 引入redux的actions

import { BottomTabbar, navList } from "../../components/bottom-tabbar/bottom-tabbar";
/**
 * 1.实现自动的登录
 *      如果cookie中有userid，发出请求获取对应的user。
 *      如果cookie中没userid，登录页面
 * 2. 如果已经登录
 *      如果根路径，根据user的type来和header计算重定向的路径。
 */

/**
 * socket 的一个博客
 * https://blog.csdn.net/neuq_zxy/article/details/77531126
 */
class Main extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const userid = Cookies.get('userid')
        const { _id } = this.props.user
        if (userid && !_id) {
            this.props.getUser()
        }
    }
    render() {
        // 从cookies中获取
        const userid = Cookies.get('userid')
        if (!userid) {
            console.log("走!userid")
            return <Navigate to='/login' />
        }
        // 从props中获取user
        let { user } = this.props
        if (!user._id) {
            console.log("走!_id  暂时不做任何显示，让其去走网络请求")
            return null
        }

        // 如果用户有_id，且要外部的路径时跳转路径是'/'。根据用户类型重新选中路由
        let path = this.props.location.pathname
        if (path === '/') {
            let path = getRedirectTo(user.type, user.header)
            return <Navigate to={path} />
        }

        // 显示下面的tab
        let displayLaobanTab = true
        if (user.usertype === 'laoban') {
            displayLaobanTab = false
        } else {
            displayLaobanTab = true
        }
        if (displayLaobanTab) {
            navList[1].hide = false
            navList[0].hide = true
        } else {
            navList[1].hide = true
            navList[0].hide = false
        }
        let filterNavList = navList.filter(nav => !nav.hide)


        let displayNav = filterNavList.find(item => {
            return item.fullpath === path
        })

        if (path === '/main') {
            const firstItem = filterNavList[0]
            return <Navigate to={firstItem.path} />
        }
        const { unReadAllCount } = this.props
        return (
            <div>
                {displayNav ? <NavBar>硅谷直聘</NavBar> : null}
                <Outlet></Outlet>
                {displayNav ? <BottomTabbar navList={filterNavList} unReadAllCount={unReadAllCount} /> : null}
            </div>
        )
    }
}

// 将Class 进行包装函数组件。这样就能使用location，navigate了。
function widthRouter(Component) {
    // 函数组件
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()

        return (
            <Component {...props} location={location} navigate={navigate} params={params}></Component>
        )
    }
    return ComponentWithRouterProp
}
/*
 redux是本身是脱离于react框架的。提供一个全局状态共享的路径。
 redux的connect实际上是给原有组件包装一个容器。
 1. 状态发生变化时可以局部更新这个组件。
 2. 可以通过dispatch去改变状态的值
*/
const mapStateToProps = (state) => {
    return { user: state.user, unReadAllCount: state.msgList.unReadAllCount }
}

const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(widthRouter(Main))