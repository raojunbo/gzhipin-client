import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderSelector from "../../components/head-selector/header-selector";
import { Navigate } from "react-router-dom";

import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
} from 'antd-mobile'

import { updateUser } from '../../redux/actions'

class DashenInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '',// 头像
            post: '', //职位
            info: '', // 信息
        }
    }
    handleChange(name, val) {
        this.setState({
            [name]: val
        })
    }
    toSave() {
        this.props.updateUser(this.state)
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    render() {
        const { header, usertype } = this.props.user
        // 若果信息已经完善过
        if (header) {
            const path = '/main'
            return <Navigate to={path} />
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader} />
                <InputItem placeholder='求职岗位' onChange={value => this.handleChange('post', value)}>求职岗位:</InputItem>
                <TextareaItem title='个人介绍:' rows={3} placeholder='个人介绍'
                    onChange={value => this.handleChange('info', value)} />
                <Button type='primary' onClick={this.save}>保存</Button>
            </div>
        )
    }
}
// 状态回来后放入props里
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
// 供调用的异步方法
const mapDispatchToProps = {
    updateUser
}
export default connect(mapStateToProps, mapDispatchToProps)(DashenInfo)