import React, { Component } from "react";
import {
    TabBar,
} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
// 在非路由组件中使用
// 这里commonjs的语法
class BottomTabbar extends Component {
    constructor(props) {
        super(props);
    }
    // 对象的state
    state = {}

    static propTypes = {
        navList: PropTypes.array.isRequired
    }
    setActiveKey(obj) {
        // this.props.history.replace()
    }
    // 原型对象
    render() {
        const { navList } = this.props
        const path = this.props.location.pathname
        return (
            <div>
                <TabBar activeKey={activeKey} onChange={setActiveKey}>
                    {
                        navList.map((item) => {
                            <TabBar.Item 
                                key={item.key}
                                icon={{ uri: require(`./images/${item.icon}.png`) }}
                                // selectedIcon={{ uri: require(`./images/${item.icon}-selected.png`) }}
                                title={item.title} />
                        })
                    }
                </TabBar>
            </div>
        );
    }
}
// 内部会向组件中传入路由的特有属性
export default withRouter(BottomTabbar);