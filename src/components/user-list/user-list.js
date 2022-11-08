import React from 'react'


// export default class HeaderSelector extends Component {
//     static propTypes = {
//         setHeader: ProTypes.func.isRequired
//     }

export default function UserList(props) {
    const { userList } = props
    console.log( JSON.stringify(userList))
    return (
        <div>
            {
                userList.map((user, index) => (
                    <div>{user.username}</div>
                ))
            }
        </div>
    )
}

// 如何给一个函数式组件设置类型的限制。
