import { Component } from "react";
import ProTypes from 'prop-types'
import 'TestRedux.js'
// import { bindActionCreators } from "redux";

/**
 * 
 * Provider组件
提供一个全局的store
<Provider store={store}></Provider>

 */
/*
mapStateToProps， 传递状态属性
mapDispatchToPorps 传递函数属性
connect(mapStateToProps， mapDispatchToPorps)（xx）
*/

export class Provider extends Component {
    // 声明组件的类型
    static propTypes = {
        store: this.propTypes
    }
    // 声明向子组件提供哪些context数据
    static childContextTypes = {
        store: ProTypes.object.isRequired
    }
    // 为子组件提供包含store的contex
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    render() {
        return this.props.children
    }
}


// const mapStateToProps = (state) => {
//     return { user: state.user, users: state.msgList.users, chats: state.msgList.chats }
// }

// const mapDispatchToProps = {
//     getMsgList2
// }

export function connect(mapStateToProps, mapDispatchToProps) {
    return (WrapComponent) => {
        return class ConnectComponent extends Component {
            static contextType = {
                store: ProTypes.object.isRequired
            }
            constructor(props, context) {
                super(props, context)
                // 得到store
                const store = context.store

                // 包含一般属性的对象
                const stateProps = mapStateToProps(store.state)

                // 包含函数属性的对象
                const dispatchProps = this.bindActionCreators(mapDispatchToProps)

                this.state = {
                    ...stateProps
                }
                this.dispatchProps = dispatchProps
            }

            bindActionCreators(mapDispatchToProps) {
                // 返回一个数组
                return Object.keys(mapDispatchToProps).reduce((preDispatchToProps, key) => {
                    preDispatchToProps[key] = (...args) => {
                        // 分发action
                        this.context.store.dispatch(mapDispatchToProps[key](...args))
                    }
                    return preDispatchToProps
                }, {})
            }
            componentDidMount() {
                const store = context.store
                // 监听状态的变化
                store.subscribe(function () {
                    // 更新当前组件的状态
                    this.setState({
                        // mapStateToProps()
                    })
                })
            }
            render() {
                return <WrapComponent {...this.state} {...this.dispatchProps}></WrapComponent>
            }
        }
    }
}