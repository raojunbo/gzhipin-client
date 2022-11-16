
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {List} from 'antd-mobile'
class Chat extends Component {
    render() {
        return (
            <div >
                <List>
                    <List.Item>我是一行</List.Item>
                    <List.Item>我是二行</List.Item>
                    <List.Item>我是三行</List.Item>
                    <List.Item>我是四行</List.Item>
                </List>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)