
import { connect } from 'react-redux'
import React, { Component } from 'react'
import TopNavBar from '../../components/top_nav_bar/top_nav_bar'
import { List,  Image, Input, Form } from 'antd-mobile'
import './chat.less'
import { useParams } from 'react-router-dom'
import { sendMsg, getChatList } from '../../redux/actions'


class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toSendText: '',
            // msgList: []
        }
    }
    componentDidMount() {
        // 1. 进去时获取
        this.props.getChatList()
        // 2. 收到消息时

    }
    sendClick() {

        const from = this.props.user._id
        const to = this.props.params.userid
        const content = this.state.toSendText.trim()
        if (content) {
            this.props.sendMsg({ from, to, content })
        }
        // 清空内容
        this.setState({
            content: null
        })
        // console.log("发送" + from + "to" + to + this.state.toSendText)

    }
    handleChange(name, val) {
        this.setState({
            [name]: val
        })
    }
    headPath(header) {
        let disHeader = header ? header : "头像1"
        return require(`../../assets/images/${disHeader}.png`)
    }
    render() {
        let { users, chatMsgs } = this.props
        
        return (
            <div >
                <TopNavBar title='硅谷直聘'></TopNavBar>
                <List className='chat-list'>
                    {
                        chatMsgs.map((msg, index) => (
                            <List.Item >
                                <div className='chat-item-left'>
                                    <Image src={this.headPath()} width={30} height={30} fit='cover' style={{ borderRadius: 4 }} />
                                    <div>{msg.content}</div>
                                </div>
                            </List.Item>
                        ))
                    }
                   
                </List>

                <Form layout='horizontal'>
                    <Form.Item extra={
                        <div className='extraPart' onClick={() => this.sendClick()}>
                            <a>发送</a>
                        </div>
                    }
                    >
                        <Input placeholder='请输入要发送的内容' value={this.state.toSendText} onChange={(val) => this.handleChange('toSendText', val)} clearable />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
function widthRouter(Component) {
    // 函数组件
    function ComponentWithRouterProp(props) {
        // 使用参数
        let params = useParams()
        return (
            <Component {...props} params={params}></Component>
        )
    }
    return ComponentWithRouterProp
}

const mapStateToProps = (state) => {
    // 从状态中获取数据
    return { users: state.chatList.users, chatMsgs: state.chatList.chatMsgs }
}

const mapDispatchToProps = {
    sendMsg,
    getChatList
}
export default connect(mapStateToProps, mapDispatchToProps)(widthRouter(Chat))