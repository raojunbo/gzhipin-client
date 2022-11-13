import React, { Component } from "react";
import { connect } from "react-redux"; // 引入redux的connect
import TopNavBar from "../../components/top_nav_bar/top_nav_bar";
import HeaderSelector from "../../components/head-selector/header-selector";

import {
    Form,
    Input,
    Button,
    TextArea
} from 'antd-mobile'

import { Navigate } from "react-router-dom";

import { FormItem } from "antd-mobile/es/components/form/form-item";

import { updateUser } from '../../redux/actions'

class LaobanInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '',// 头像
            post: '', //职位
            company: '', // 公司
            salary: '',  // 薪水
            info: '', // 信息
        }
    }
    toSave() {
        this.props.updateUser(this.state)
    }
    handleChange(name, val) {
        this.setState({
            [name]: val
        })
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    render() {
        const { header, type } = this.props.user
        // 若果信息已经完善过
        if (header) {
            // const path = type === 'dashen' ? '/dashen' : '/laoban'
            const path = '/main'
            return <Navigate to={path} />
        }
        return (
            <div>
                <TopNavBar>老板信息完善</TopNavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <Form layout='horizontal'>
                    <Form.Item label='招聘职位:'>
                        <Input placeholder='请输入招聘职位' onChange={(val) => this.handleChange("post", val)} />
                    </Form.Item>
                    <Form.Item label='公司名称:'>
                        <Input placeholder='请输入公司名称' onChange={(val) => this.handleChange("company", val)} />
                    </Form.Item>
                    <Form.Item label='职位薪资:'>
                        <Input placeholder='请输入职位薪资' onChange={(val) => this.handleChange("salary", val)} />
                    </Form.Item>
                    <Form.Item label='职位要求:'>
                        <TextArea placeholder='请输入职位要求' onChange={(val) => this.handleChange('info', val)} autoSize={{ minRows: 3, maxRows: 5 }} />
                    </Form.Item>
                    {/* <FormItem> */}

                    {/* </FormItem> */}
                    <Button block color='primary' onClick={() => this.toSave()}>保存</Button>
                </Form>
            </div>
        )
    }
}
// export default LaobanInfo
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    updateUser
}
export default connect(mapStateToProps, mapDispatchToProps)(LaobanInfo)