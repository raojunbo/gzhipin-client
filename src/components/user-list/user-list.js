import React from 'react'
import {
    Image,
    Card
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
                    <Card onClick={() => onClick(user)} key={index} bodyStyle={{ marginBottom: 5 }}>
                        <div className='user-list-item'>

                            <div className='user-list-item-header'>
                                <Image src={headPath(user.header)} width={44} height={44} fit='cover' style={{ borderRadius: 4 }} />
                                <div>{user.username}</div>
                            </div>

                            <div className='user-list-item-body'>
                                <div>职位  {user.post}</div>
                                <div>公司  {user.post}</div>
                                <div>描述  {user.info}</div>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}
