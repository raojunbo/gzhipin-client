import React, { Component } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import {
    TabBar
} from 'antd-mobile'
import './bottom-tabbar.less'
import PropTypes from 'prop-types';


const navList = [
    {
        path: 'laoban',
        fullpath: '/main/laoban',
        // component: Laoban,
        title: '大神列表',
        icon: 'laoban',
        text: '大神'
    },
    {
        path: 'dashen',
        fullpath: '/main/dashen',
        // component: Dashen,
        title: '老板列表',
        icon: 'dashen',
        text: '老板'
    },
    {
        path: 'message',
        fullpath: '/main/message',
        // component: Message,
        title: '消息列表',
        icon: 'message',
        text: '消息'
    },
    {
        path: 'person',
        fullpath: '/main/person',
        // component: Person,
        title: '个人中心',
        icon: 'person',
        text: '个人'
    }
]

function BottomTabbar(props) {
    let navigate = useNavigate()
    let location = useLocation()
    let path = location.pathname
    let { navList } = props
    let { unReadAllCount } = props

    function routerActive(value) {
        navigate(value)
    }

    return (
        <div className="bottom-tabbar">
            <TabBar>
                {navList.map((nav, index) => (
                    <TabBar.Item key={index}
                        badge={nav.path === 'message' ? unReadAllCount : 0}
                        title={nav.text}
                        icon={{ uri: require(`./images/${nav.icon}.png`) }}
                        selectedIcon={{ uri: require(`./images/${nav.icon}-selected.png`) }}
                        selected={nav.fullpath === path}
                        onPress={() => routerActive(nav.fullpath)}
                    />
                ))}
            </TabBar>
        </div>

    );
}
// 限制输入参数的类型
BottomTabbar.propTypes = {
    unReadAllCount: PropTypes.number.isRequired
}

export { navList, BottomTabbar }
