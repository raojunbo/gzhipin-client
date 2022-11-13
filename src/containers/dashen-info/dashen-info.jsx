import React, { Component } from "react";
import { connect } from "react-redux"; 
import TopNavBar from "../../components/top_nav_bar/top_nav_bar";
import HeaderSelector from "../../components/head-selector/header-selector";
import { Navigate } from "react-router-dom";

import {
    Form,
    Input,
    Button,
    TextArea
} from 'antd-mobile'

import { FormItem } from "antd-mobile/es/components/form/form-item";
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
            // const path = usertype === 'dashen' ? '/main' : '/laoban'
            const path = '/main'
            return <Navigate to={path} />
        }
        return (
            <div>
                <TopNavBar>大神信息完善</TopNavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <Form layout='horizontal'>
                    <Form.Item label='求职岗位:'>
                        <Input placeholder='请输入求职岗位' onChange={(val) => this.handleChange("post", val)} />
                    </Form.Item>
                    <Form.Item label='个人介绍:'>
                        <TextArea placeholder='请输个人介绍' onChange={(val) => this.handleChange('info', val)} autoSize={{ minRows: 3, maxRows: 5 }} />
                    </Form.Item>
                    {/* <FormItem> */}
                       
                    {/* </FormItem> */}
                    <Button block  color='primary' onClick={() => this.toSave()}>保存</Button>
                </Form>
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