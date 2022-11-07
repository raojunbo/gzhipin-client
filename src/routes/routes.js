import { Navigate } from 'react-router-dom'
import Register from '../containers/register/register'
import Login from '../containers/login/login'
import Main from '../containers/main/main'
import Dashen from '../containers/dashen/dashen'
import NotFound from '../components/notfound/notfound'
import Laoban from '../containers/laoban/laoban'
import Person from '../containers/person/person'
import Message from '../containers/message/message'
// 全局路由配置入口
export default [
    // 根组件
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    // main下面的子路由
    {
        path: '/main',
        element: <Main />,
        children: [
            {
                path: 'dashen',
                element: <Dashen />
            },
            {
                path: 'laoban',
                element: <Laoban />
            },
            {
                path: 'person',
                element: <Person />
            },
            {
                path: 'message',
                element: <Message />
            },
            {
                path: 'dasheninfo',
                element: <Message />
            },
            {
                path: 'laobaninfo',
                element: <Message />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/main' />
    },
    {
        path: '/notfound',
        element: <NotFound />
    },
]