import React, { Component } from "react";
import { connect } from "react-redux"; 
import TopNavBar from "../../components/navbar/top_nav_bar";
import HeaderSelector from "../../components/head-selector/header-selector";

import {
    Form,
    Input,
    Button,
    TextArea
} from 'antd-mobile'
import { FormItem } from "antd-mobile/es/components/form/form-item";

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
        console.log("这是LaobanInfo" + JSON.stringify(this.state))
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    render() {
        return (
            <div>
                <TopNavBar title='大神信息完善'></TopNavBar>
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
// export default  DashenInfo
const mapStateToProps = (state) => {
    return {
        // user: state.user 
    }
}
const mapDispatchToProps = {
    // register
}
export default connect(mapStateToProps, mapDispatchToProps)(DashenInfo)