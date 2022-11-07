import React, { Component } from "react";
import { useNavigate } from 'react-router-dom'
import {
    TabBar
} from 'antd-mobile'
import CustomTabIcon from "./custom-tab-icon";
import './bottom-tabbar.less'
function BottomTabbar(props) {
    let navigate = useNavigate()
    const navList = [
        {
            path: 'laoban',
            // component: Laoban,
            title: '大神列表',
            icon: (active) => <CustomTabIcon active={active} imagename='laoban' />,
            text: '大神'
        },
        {
            path: 'dashen',
            // component: Dashen,
            title: '老板列表',
            icon: (active) => <CustomTabIcon active={active} imagename='dashen' />,
            text: '老板'
        },
        {
            path: 'message',
            // component: Message,
            title: '消息列表',
            icon: (active) => <CustomTabIcon active={active} imagename='message' />,
            text: '消息'
        },
        {
            path: 'person',
            // component: Person,
            title: '个人中心',
            icon: (active) => <CustomTabIcon active={active} imagename='person' />,
            text: '个人'
        }
    ]

    const { displayLaobanTab } = props
    if (displayLaobanTab) {
        navList[1].hide = false
        navList[0].hide = true
    } else {
        navList[1].hide = true
        navList[0].hide = false
    }
    let filterNavList = navList.filter(nav => !nav.hide)

    function routerActive(value) {
        navigate(value)
    }

    return (
        <div className="bottom-tabbar">
            <TabBar onChange={routerActive}>
                {filterNavList.map(item => (
                    <TabBar.Item
                        key={item.path}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </TabBar>
        </div>
    );
}

export default BottomTabbar

// class BottomTabbar extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             currentPath: ''
//         }
//     }
//     navList = [
//         {
//             path: 'laoban',
//             // component: Laoban,
//             title: '大神列表',
//             icon: (active) => <CustomTabIcon active={active} imagename='laoban' />,
//             text: '大神'
//         },
//         {
//             path: 'dashen',
//             // component: Dashen,
//             title: '老板列表',
//             icon: (active) => <CustomTabIcon active={active} imagename='dashen' />,
//             text: '老板'
//         },
//         {
//             path: 'message',
//             // component: Message,
//             title: '消息列表',
//             icon: (active) => <CustomTabIcon active={active} imagename='message' />,
//             text: '消息'
//         },
//         {
//             path: 'person',
//             // component: Person,
//             title: '个人中心',
//             icon: (active) => <CustomTabIcon active={active} imagename='person' />,
//             text: '个人'
//         }
//     ]
//     // setRouteActive(value) {
//     //     // const { onTabChanged } = this.props
//     //     // console.log("是这里在不断的调用吗")
//     //     // onTabChanged(value)
//     //     // this.setState({
//     //     //     currentActivePath: value
//     //     // })
//     //     let navigate = useNavigate()
//     //     navigate(value)
//     // }
//     // 原型对象
//     render() {
//         const { displayLaobanTab } = this.props
//         if (displayLaobanTab) {
//             this.navList[1].hide = false
//             this.navList[0].hide = true
//         } else {
//             this.navList[1].hide = true
//             this.navList[0].hide = false
//         }
//         let filterNavList = this.navList.filter(nav => !nav.hide)
//         let { currentPath } = this.state
//         // if(!currentPath) {
//         //     return <Navigate to={currentPath} />
//         // }
//         return (
//             <div className="bottom-tabbar">
//                 <TabBar onChange={(value) => this.setRouteActive(value)}>
//                     {filterNavList.map(item => (
//                         <TabBar.Item
//                             key={item.path}
//                             icon={item.icon}
//                             title={item.title}
//                         />
//                     ))}
//                 </TabBar>
//             </div>
//         );
//     }
// }

// function withCustomRoute(component) {
//    function setRouteActive(value) {
//         // const { onTabChanged } = this.props
//         // console.log("是这里在不断的调用吗")
//         // onTabChanged(value)
//         // this.setState({
//         //     currentActivePath: value
//         // })
//         let navigate = useNavigate()
//         navigate(value)
//     }
//     return <component/>
// }
// export default BottomTabbar
// export default withCustomRoute(BottomTabbar)
// // 内部会向组件中传入路由的特有属性
// // export default withRouter(BottomTabbar);