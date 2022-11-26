import {ajaxTest, ajax} from "./ajax";
export const reqRegister = (user) => ajax('/register',user,'POST')

export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST')

export const reqUpdateUser = (user) => ajax('/update', user,'POST')

export const reqUser = () => ajax('/user')

// 获取用户列表
export const reqGetUserList = (usertype) =>  ajax('/getUserList',{usertype})

// 获取当前用户的聊天记录
export const reqMsgList = () => ajax('/msgList')

// 标记已读
export const reqMarkReadMsg = (to_userid) => ajax('/readmsg',{to_userid},'POST')