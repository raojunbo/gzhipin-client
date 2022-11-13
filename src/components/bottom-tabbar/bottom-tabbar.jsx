import React, { Component } from "react";
import { useNavigate } from 'react-router-dom'
import {
    TabBar
} from 'antd-mobile'
import CustomTabIcon from "./custom-tab-icon";
import './bottom-tabbar.less'

const navList = [
    {
        path: 'laoban',
        fullpath: '/main/laoban',
        // component: Laoban,
        title: '大神列表',
        icon: (active) => <CustomTabIcon active={active} imagename='laoban' />,
        text: '大神'
    },
    {
        path: 'dashen',
        fullpath: '/main/dashen',
        // component: Dashen,
        title: '老板列表',
        icon: (active) => <CustomTabIcon active={active} imagename='dashen' />,
        text: '老板'
    },
    {
        path: 'message',
        fullpath: '/main/message',
        // component: Message,
        title: '消息列表',
        icon: (active) => <CustomTabIcon active={active} imagename='message' />,
        text: '消息'
    },
    {
        path: 'person',
        fullpath: '/main/person',
        // component: Person,
        title: '个人中心',
        icon: (active) => <CustomTabIcon active={active} imagename='person' />,
        text: '个人'
    }
]

function BottomTabbar(props) {
    let navigate = useNavigate()
    let { navList } = props

    function routerActive(value) {
        navigate(value)
    }

    return (
        <div className="bottom-tabbar">
            <TabBar onChange={routerActive}>
                {navList.map(item => (
                    <TabBar.Item
                        key={item.path}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </TabBar>
        </div>
    );
}

export { navList, BottomTabbar }
