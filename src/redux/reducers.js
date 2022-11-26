import { combineReducers } from 'redux'
import {
    AUTH_SUCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,

    RECEIVE_USER_LIST,
    RECEIVE_MSG_LIST,
    RECEIVE_MSG,
    MARK_READ_MSG
} from './action-types'

import { getRedirectTo } from '../utils/util'

// 给user一个初始化的状态
const initUser = {
    username: '', // 用户名
    usertype: '', // 用户类型
    msg: '', // 错误提示信息
    redirectTo: '' // 跳转的路径
}

// 改变user状态的reducer。store内部会维持user的状态。
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCESS:
            // 将action.data解构到state。并返回state
            const { usertype, header } = action.data
            return { ...action.data, redirectTo: getRedirectTo(usertype, header) }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return { ...initUser, msg: action.data }
        default:
            return state
    }
}

const initUserList = []
function userList(state = initUserList, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return action.data
        default:
            return state
    }
}

const initMsgList = {
    users: {},
    chats: [],
    unReadAllCount: 0
}

function msgList(state = initMsgList, action) {
    switch (action.type) {
        // http获取消息列表
        case RECEIVE_MSG_LIST: {
            const { users, chats, userid } = action.data
            let unReadAllCount = chats.reduce((preTotal, msg) => {
                if (!msg.read && msg.to === userid) {
                    preTotal = preTotal + 1
                }
                return preTotal
            }, 0)
            // console.log("这是计算出来的总的未读数目" + unReadAllCount)

            return { users, chats, unReadAllCount }
        }
        // webSocket收到单个消息
        case RECEIVE_MSG:
            const { chat, userid } = action.data
            let unReadAllCount = state.unReadAllCount
            if (!chat.read && chat.to == userid) {
                unReadAllCount = unReadAllCount + 1
            }
            return {
                users: state.users,
                chats: [...state.chats, chat],
                unReadAllCount
            }
        // 标记为已经读
        case MARK_READ_MSG:
            const { from, to, count } = action.data
            return {
                users: state.chatList.users,
                chats: state.chatList.chats.map(msg => {
                    // 需要更新
                    if (msg.from === from && msg.to === to && !msg.read) {
                        // 这里不能直接用msg.read = true。
                        // 用这种方式产生新的数据
                        return { ...msg, read: true }
                    } else {
                        return msg
                    }
                }),
                unReadAllCount: state.unReadAllCount - count
            }

        default:
            return state
    }
}


// 接收一个包含多个reducer函数的对象。返回一个新的reducer函数
// 内部实际上是调用reducer函数，得到n个新的子状态，封装成对象并返回

export default combineReducers({ user, userList, msgList })







// 创建一个自己的react-redux
