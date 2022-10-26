import { reqRegister, reqLogin, reqUpdateUser } from '../api/index'
import { AUTH_SUCESS, ERROR_MSG } from './action-types'

const getAuthSucessAction = (user) => {
    return  { type: AUTH_SUCESS, data: user }
}
const getErrorMsgAction = (msg) => {
    return { type: ERROR_MSG, data: msg }
}

export const register = (user) => {
    // user解构
    const { username, password, type } = user
    if (!username) {
        return getErrorMsgAction('2次密码要一致')
    } 
    // else if (password != password2) {
    //     return getErrorMsgAction('2次密码要一致')
    // }
    return async dispatch => {
        // 如果有等待，说明该函数应该是异步函数
        const response = await reqRegister({ username, password, type })
        const result = response.data
        if (result.code === 0) {
            // 发送成功
            dispatch(getAuthSucessAction(result.data))
        } else {
            // 失败
            dispatch(getErrorMsgAction(result.msg))
        }
    }
}

export const login = (user) => {
    const { username, password, password2, type } = user
    if (!username) {
        return getErrorMsgAction('2次密码要一致')
    } else if (password != password2) {
        return getErrorMsgAction('2次密码要一致')
    }
    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        if (result.code === 0) {
            // 发送成功
            dispatch(getAuthSucessAction(result.data))
        } else {
            // 失败
            dispatch(getErrorMsgAction(result.msg))
        }
    }
}