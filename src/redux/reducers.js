import {combineReducers} from 'redux'
function xx(state = 0, action) {
    return state
}
function yy(state = 0, action) {
    return state
}
// 返回一个合并的状态
export default combineReducers({
        xx,
        yy
    }
)
