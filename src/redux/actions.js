import {
    reqRegister,
    reqLogin,
    reqUpdateUser,
    reqUser,
    reqGetUserList
} from '../api/index'
import UserList from '../components/user-list/user-list'

import {
    AUTH_SUCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST
} from './action-types'

// 通过向store中发action。来改变store中的状态。
const getAuthSucessAction = (user) => {
    return { type: AUTH_SUCESS, data: user }
}
const getErrorMsgAction = (msg) => {
    return { type: ERROR_MSG, data: msg }
}
const getReceiveUserAction = (user) => {
    return { type: RECEIVE_USER, data: user }
}
export const resetUserAction = (msg) => {
    return { type: RESET_USER, data: msg }
}
const getUserListAction = (userList) => {
    return {type:RECEIVE_USER_LIST, data: userList }
}

// 当收到数据后，发送action

export const register = (user) => {
    // user解构赋值
    const { username, password, password2, usertype } = user
    if (!username) {
        return getErrorMsgAction('用户名不能为空')
    }
    if (password != password2) {
        return getErrorMsgAction('2次密码要一致')
    }
    return async dispatch => {
        // 如果有等待，说明该函数应该是异步函数
        const response = await reqRegister({ username, password, usertype })
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

export const updateUser = (user) => {
    return async dispatch => {
        const response = await reqUpdateUser(user)
        const result = response.data
        if (result.code == 0) {
            // 更新成功
            dispatch(getReceiveUserAction(result.data))
        } else {
            // 更新失败
            dispatch(resetUserAction(result.msg))
        }
    }
}

export const getUser = () => {
    return async dispatch => {
        const response = await reqUser()
        const result = response.data

        if (result.code == 0) {
            dispatch(getReceiveUserAction(result.data))
        } else {
            dispatch(resetUserAction(result.msg))
        }
    }
}
export const getUserList = (usertype) => {
    return async dispatch => {
        const response = await reqGetUserList(usertype)
        const result = response.data

        if (result.code == 0) {
            // redux 分发同步action
            dispatch(getUserListAction(result.data))
        }
    }
}