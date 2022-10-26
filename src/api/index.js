import {ajaxTest, ajax} from "./ajax";
export const reqRegister = (user) => ajax('/register',user,'POST')

export const reqRegisterTest = (user) => {
    // 注册成功后，返回相应的假数据
    ajaxTest('/register','POST',{ ...user, msg: '' })
}



export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST')

export const reqLoginTest = ({username, password}) => {
    let testUser =  {
        
        username: username,
        password: password,
        usertype: "laoban",
        msg:null
    }
    // 登录返回登录的数据
    ajaxTest('/login', {username, password},'POST',testUser)
}

export const reqUpdateUser = (user) => ajax('/update', user,'POST')