// 创建一个自己的redux
// 1. createStore()
// 使用：createStore(reducer)
// 2. combineReducers(reducers)
// 使用：combineReducers({})
// 3. store对象
// getState：得到内部管理的state
// dispatch(action): 分发action，会触发reducer,并返回一个新的state
// subscribe(listen)：订阅一个state的监听器


export function createStore2(reducer) {
    // 第一次调用reducer得到初始状态保存
    let state = reducer(state, { type: '@mini-redux' })
    // 内部保存n个listener数组
    const listeners = []
    // 得到内部管理state对象
    function getState() {
        return state
    }
    // 通过发送action
    function dispatch(action) {
        // 调用reducer，得到一个新的state
        state = reducer(state, action)
        // 调用监视函数
        listeners.forEach(listener => listener())
    }
    function subscribe(listener) {
        // listener是一个函数。一般是监听到后，重新渲染
        listeners.push(listener)
    }
    return { getState, dispatch, subscribe }
}

// 自己写一个combineReducers
export function combineReducers2(reducers) {
    return function (state = {}, action) {
        const newState = {}
        const keys = Object.keys(reducers)
        keys.forEach(key => {
            const childReducer = reducers[key]
            const childState = state[key]
            const newChildState = childReducer(childState, action)
            newState[key] = newChildState
        })
        return newState
    }
}