import { combineReducers } from 'redux'
import { AUTH_SUCESS, ERROR_MSG } from './action-types'
import {getRedirectTo} from '../utils/util'

// 给user一个初始化的状态
const initUser = {
    username: '', // 用户名
    type: '', // 用户类型
    msg: '', // 错误提示信息
    redirectTo: '' // 跳转的路径
}

// 改变user状态的reducer。store内部会维持user的状态。
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCESS:
            // 将action.data解构到state。并返回state
            const {type, header} = action.data
            return {...action.data, redirectTo:getRedirectTo(type, header) }
        case ERROR_MSG:
            return { ...state, msg: action.data }
        default:
            return state
    }
}

// 通过调用combineReducers返回一个合并的状态
export default combineReducers({user})
