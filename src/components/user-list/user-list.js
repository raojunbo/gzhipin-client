import React from 'react'
import {
    Image,
    Card
} from 'antd-mobile'
import { func } from 'prop-types'
import './user-list.less'

export default function UserList(props) {
    const { userList } = props
    console.log("这是结果" + JSON.stringify(userList))
    function onClick() {
        console.log("这是点击效果")
    }
    return (
        <div className='user-list'>
            {
                userList.map((user, index) => (
                    <Card onClick={onClick} key={index} bodyStyle={{ marginBottom: 5 }}>
                        <div className='user-list-item'>

                            <div className='user-list-item-header'>
                                <Image src={require(`../../assets/images/${user.header}.png`)} width={44} height={44} fit='cover' style={{ borderRadius: 4 }} />
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
