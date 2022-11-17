import { combineReducers } from 'redux'
import { 
    AUTH_SUCESS, 
    ERROR_MSG, 
    RECEIVE_USER, 
    RESET_USER, 
    
    RECEIVE_USER_LIST, 

    RECEIVE_CHAT_LIST
} from './action-types'
import {getRedirectTo} from '../utils/util'

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
            const {usertype, header} = action.data
            return {...action.data, redirectTo:getRedirectTo(usertype, header) }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}

const initUserList = []
function userList(state=initUserList, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return  action.data
        default:
            return state
    }
}

const initChatList = {}
function chatList(state = initChatList, action) {
    switch (action.type) {

        case RECEIVE_CHAT_LIST:
            console.log("这里来了吗" + JSON.stringify(action.data))
            return  {users: action.data.users, chatMsgs: action.data.chats}
        default:
            return state
    }
}
// Reducers是收到数据后的函数处理
export default combineReducers({user, userList, chatList})


