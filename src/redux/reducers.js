import { combineReducers } from 'redux'
import { AUTH_SUCESS, ERROR_MSG } from './action-types'

//user肯定是多组件共享的
const initUser = {
    username: '',
    type: '', // 用户类型
    msg: '' // 错误提示信息
}
// 尝试
function userReducer(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCESS:
            // 将action.data解构到state。并返回state
            return { ...state, ...action.data }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        default:
            return state
    }
}
// 通过调用combineReducers返回一个合并的状态
export default combineReducers({userReducer})
