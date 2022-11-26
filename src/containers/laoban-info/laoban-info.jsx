import React, { Component } from "react";
import { connect } from "react-redux"; // 引入redux的connect
import HeaderSelector from "../../components/head-selector/header-selector";

import {
    NavBar, InputItem, TextareaItem, Button
} from 'antd-mobile'

import { Navigate } from "react-router-dom";
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
            const path = '/main'
            return <Navigate to={path} />
        }
        return (
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader} />
                <InputItem placeholder='招聘职位' onChange={value => this.handleChange('post', value)}>招聘职位:</InputItem>
                <InputItem placeholder='公司名称' onChange={value => this.handleChange('company', value)}>公司名称:</InputItem>
                <InputItem placeholder='职位薪资' onChange={value => this.handleChange('salary', value)}>职位薪资:</InputItem>
                <TextareaItem title='职位要求:' rows={3} placeholder='职位要求'
                    onChange={value => this.handleChange('info', value)} />
                <Button type='primary' onClick={this.save}>保存</Button>
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