import React, { Component } from "react";
import {
    NavBar
} from 'antd-mobile'

import './top_nav_bar.less'

// 函数组件时没有props了吗

// export default function TopNavBar() {
//     // 硅&nbsp;谷&nbsp;直&nbsp;聊
//     return （
//         <NavBar className="navBar top-nav-bar">{this.props.title}</NavBar>
//      )
// }

export default class TopNavBar extends Component {
    render() {
        return (
            <NavBar className="navBar top-nav-bar">{this.props.title}</NavBar>
        )
    }
}