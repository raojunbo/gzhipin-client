import {applyMiddleware, createStore} from 'redux'
import combineReducers from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// 创建store，并向外暴露
export default createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))