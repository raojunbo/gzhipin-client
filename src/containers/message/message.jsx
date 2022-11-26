import React, { Component } from "react";
import {
    List, WhiteSpace, Button, Modal, Badge
} from 'antd-mobile'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMsgList2 } from '../../redux/actions'

const Item = List.Item
const Brief = Item.Brief

class Message extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { user } = this.props
        // console.log("这是user" + JSON.stringify(user))
        this.props.getMsgList2(user._id)
    }
    getlastMsgs(chats, userid) {
        const lastMsgContainer = {}

        // 获取最后的消息
        chats.forEach(msg => {
            if (msg.to === userid && !msg.read) {
                 // 是发送给我的，并且消息未读
                msg.unReadCount = 1
            } else {
                msg.unReadCount = 0
            }
            const chatId = msg.chat_id
            const lastMsg = lastMsgContainer[chatId]
            if (!lastMsg) {
                lastMsgContainer[chatId] = msg
            } else {
                let currentUnReadCount = lastMsg.unReadCount + msg.unReadCount
                if (msg.create_time > lastMsg.create_time) {
                    lastMsgContainer[chatId] = msg
                }
                lastMsgContainer[chatId].unReadCount = currentUnReadCount
            }
        });
        const lastMsgs = Object.values(lastMsgContainer)
        // 按时间排序消息
        lastMsgs.sort(function (m1, m2) {
            return m1.create_time - m2.create_time
        })
        return lastMsgs
    }
    userHeader(users, msg) {
        let headerSrc = require(`../../assets/images/头像1.png`)
        if (msg && users[msg.to].header) {
            headerSrc = require(`../../assets/images/${users[msg.to].header}.png`)
        }
        return headerSrc
    }
    goChat(msg) {
        const { navigate } = this.props
        navigate(`/main/chat/${msg.from}`)
    }
    render() {
       
        const { user, users, chats } = this.props
       
        const lastMsgs = this.getlastMsgs(chats, user._id)
        // console.log("这是message")
        // console.log("这是message")
        return (
            <List>
                {
                    lastMsgs.map((msg, index) => {
                        return (
                            <Item
                                key={msg._id}
                                extra={<Badge text={msg.unReadCount}></Badge>}
                                thumb={this.userHeader(users, msg)}
                                arrow='horizontal'
                                onClick={() => this.goChat(msg)}
                            >
                                {msg.content}
                                <Brief>{users[msg.to === user._id ? msg.from : msg.to].username}</Brief>
                            </Item>
                        )
                    })
                }
            </List>
        )
    }
}

function widthRouter(Component) {
    // 函数组件
    function ComponentWithRouterProp(props) {
        // 使用参数
        let params = useParams()
        let navigate = useNavigate()
        let location = useLocation()
        return (
            <Component {...props} params={params} navigate={navigate} location={location}></Component>
        )
    }
    return ComponentWithRouterProp
}

const mapStateToProps = (state) => {
    return { user: state.user, users: state.msgList.users, chats: state.msgList.chats }
}

const mapDispatchToProps = {
    getMsgList2
}
export default connect(mapStateToProps, mapDispatchToProps)(widthRouter(Message))