import { reqRegister, reqLogin, reqUpdateUser } from '../api/index'

import { AUTH_SUCESS, ERROR_MSG } from './action-types'

// 通过向store中方action。来改变store中的状态。
const getAuthSucessAction = (user) => {
    return { type: AUTH_SUCESS, data: user }
}
const getErrorMsgAction = (msg) => {
    return { type: ERROR_MSG, data: msg }
}

export const register = (user) => {
    // user解构赋值
    const { username, password, password2, type } = user
    if (!username) {
        return getErrorMsgAction('用户名不能为空')
    }
    if (password != password2) {
        return getErrorMsgAction('2次密码要一致')
    }
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
    const { username, password } = user
    if (!username) {
        return getErrorMsgAction('用户名不能为空')
    }
    if (!password) {
        return getErrorMsgAction('密码必须指定')
    }
    // async dispatch 不能写
    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        if (result.code === 0) {
            // 发送成功。这个dispatch是store的dispatch
            dispatch(getAuthSucessAction(result.data))
        } else {
            // 失败
            dispatch(getErrorMsgAction(result.msg))
        }
    }
}