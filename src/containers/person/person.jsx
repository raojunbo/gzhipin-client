import React, { Component } from "react";
import { connect } from 'react-redux'
import {
    Dialog,
    Button,
    Image,
    List,
    Result
} from 'antd-mobile'

import { resetUserAction } from '../../redux/actions'
import Cookies from 'js-cookie'

function CustomHeaderImage(props) {
    const { imagename } = props
    console.log('这是image' + imagename)
    return (
        <div>
            <Image src={require(`../../assets/images/头像1.png`)} width={60} height={60} fit='fill' />
        </div>
    )
}
class Person extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        Dialog.confirm({
            content: '是否退出登录',
            onConfirm: async () => {
                console.log("收到确认")
                Cookies.remove('userid')
                this.props.resetUserAction()
            },
        })
    }
    render() {
        const { username, type, post, salary, info, company, header } = this.props.user
        console.log("这是person的user" + JSON.stringify(this.props.user))
        return (
            <div>
                <Result
                    status='error'
                    title={username}
                    icon={<CustomHeaderImage imagename={header} />}
                    description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
                />
                <List header='简介'>
                    <List.Item>职位 iOS开发工程师</List.Item>
                    <List.Item>简介 js </List.Item>
                    <List.Item>薪酬 30k</List.Item>
                </List>
                <Button color='danger' block onClick={() => this.logout()}>退出登录</Button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = {
    resetUserAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Person)