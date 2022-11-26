import React, { Component } from "react";
import { connect } from 'react-redux'
import {
    Result, List, WhiteSpace, Button, Modal
} from 'antd-mobile'

import { resetUserAction } from '../../redux/actions'
import Cookies from 'js-cookie'

const Item = List.Item
const Brief = Item.Brief

function CustomHeaderImage(props) {
    const { imagename } = props
    console.log('这是image' + imagename)
    return (
        <div>
            <img src={require(`../../assets/images/头像1.png`)} width={60} height={60} fit='fill' />
        </div>
    )
}
class Person extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        Modal.alert('退出', '确认退出登陆吗?', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确认', onPress: () => {
                    console.log('ok')
                    // 清除cooike中的userid
                    Cookies.remove('userid')
                    // 重置redux中的user状态
                    this.props.resetUserAction()
                }
            },
        ])
    }
    render() {
        const { username, type, post, salary, info, company, header } = this.props.user
        console.log("这是person的user" + JSON.stringify(this.props.user))
        return (
            <div style={{ marginTop: 50 }}>
                <Result
                    img={<img src={require(`../../assets/images/${header}.png`)} style={{ width: 50 }} alt="header" />}
                    title={username}
                    message={company ? company : null}
                />

                <List renderHeader={() => '相关信息'}>
                    <List.Item multipleLine>
                        <Brief>职位: {post}</Brief>
                        <Brief>简介: {info}</Brief>
                        {salary ? <Brief>薪资: {salary}</Brief> : null}
                    </List.Item>
                </List>
                <WhiteSpace />
                <List>
                    <Button type='warning' onClick={this.logout}>退出登录</Button>
                </List>
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