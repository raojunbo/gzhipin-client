import React from 'react'
import {
    Card,
} from 'antd-mobile'
import { func } from 'prop-types'
import './user-list.less'
import { useNavigate } from 'react-router-dom'

export default function UserList(props) {
    const { userList } = props

    let navigate = useNavigate()

    function onClick(user) {
        console.log("这是点击效果" + user)
        navigate(`/main/chat/${user._id}`)
    }
    function headPath(header) {
        let disHeader = header ? header : "头像1"
        return require(`../../assets/images/${disHeader}.png`)
    }
    return (

        <div className='user-list'>
            {
                userList.map((user, index) => (
                    <div key={index}>
                        <Card onClick={() => onClick(user)} key={index}>
                            <Card.Header
                                thumb={headPath(user.header)}
                                extra={user.username}
                            />
                            <Card.Body>
                                <div className='user-list-item-body'>
                                    <div>{user.usertype == 'laoban' ? '招聘职位：':'求职岗位：'} {user.post}</div>
                                    {user.company ? <div>招聘公司: {user.company}</div> : null}
                                    {user.salary ? <div>招聘月薪: {user.salary}</div> : null}
                                    <div>个人描述: {user.info}</div>
                                </div>
                            </Card.Body>

                            {/* </div> */}
                        </Card>
                    </div>

                ))
            }
        </div>
    )
}
