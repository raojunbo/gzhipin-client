import { Navigate } from 'react-router-dom'
import Register from '../containers/register/register'
import Login from '../containers/login/login'
import Main from '../containers/main/main'
import Dashen from '../containers/dashen/dashen'
import NotFound from '../components/notfound/notfound'
import Laoban from '../containers/laoban/laoban'
import Person from '../containers/person/person'
import Message from '../containers/message/message'
import DashenInfo from '../containers/dashen-info/dashen-info'
import LaobanInfo from '../containers/laoban-info/laoban-info'
import Chat from '../containers/chat/chat'
// 全局路由配置入口
export default [
    {
        path: '/',
        element: <Navigate to='/main' />
    },
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
                element: <DashenInfo />
            },
            {
                path: 'laobaninfo',
                element: <LaobanInfo />
            },
            {
                path: 'chat/:userid',
                element: <Chat />
            }
        ]
    },
   
    {
        path: '*',
        element: <NotFound />
    },
]