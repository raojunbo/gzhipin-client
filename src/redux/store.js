import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'

// 以自定义的reducers未参数，创建store。，并向外暴露
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))