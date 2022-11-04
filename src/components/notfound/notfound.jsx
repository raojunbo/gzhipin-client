import React, { Component } from "react";
import { Navigate } from 'react-router-dom'
import {
    Button
} from 'antd-mobile'

class NotFound extends Component {
    constructor(props) {
        super(props);
    }
    state = { back: false }
    
    backToMain() {
        this.setState({
            back: true
        })
    }

    render() {
        // 通过状态
        if (this.state.back) {
            return <Navigate to='/' />
        }
        return (
            <div>
                <h2>抱歉，找不到该页面</h2>
                <Button primary onClick={() => this.backToMain()}>返回到首页</Button>
            </div>
        );
    }
}

export default NotFound;