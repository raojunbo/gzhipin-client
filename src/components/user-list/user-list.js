import React from 'react'
import {
    // Dialog,
    // Button,
    // Image,
    // List,
    // Result
    Card
} from 'antd-mobile'
import { func } from 'prop-types'

// export default class HeaderSelector extends Component {
//     static propTypes = {
//         setHeader: ProTypes.func.isRequired
//     }

export default function UserList(props) {
    const { userList } = props
    console.log("这是结果" + JSON.stringify(userList))
    function onClick() {
        console.log("这是点击效果")
    }
    return (
        <div>
            {
                userList.map((user, index) => (
                    <Card onClick={onClick}>
                        <div>{user.username}</div>
                    </Card>
                ))
            }
        </div>
    )
}

// 如何给一个函数式组件设置类型的限制。
