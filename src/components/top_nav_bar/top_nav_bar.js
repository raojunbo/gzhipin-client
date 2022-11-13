import React, { Component } from "react";
import {
    NavBar
} from 'antd-mobile'

import './top_nav_bar.less'

// 函数组件需要手动写props的参数

export default function TopNavBar(props) {
    const {title} = props
    return (
        <div className="top-nav-bar">
              <NavBar className="navBar">{title}</NavBar>
        </div>
      
    )
}