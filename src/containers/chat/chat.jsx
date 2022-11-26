import { connect } from 'react-redux'
import React, { Component } from 'react'
import { NavBar, List, InputItem, Grid, Icon } from 'antd-mobile'
import './chat.less'


import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { sendMsg, getMsgList2, markReadMsg } from '../../redux/actions'


class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            isShow: false // 是否显示表情列表
        }
    }

    componentDidMount() {
        let { _id } = this.props.user
        this.props.getMsgList2(_id)
        // 初始化显示
        // window.scrollTo(0, document.body.scrollHeight)

        // 标记更新消息的未读数量
        // const to = this.props.params.to_userid
        // 更新我(_id) 与to 的消息
        // this.props.markReadMsg(_id, to)
    }

    // componentDidUpdate() {
    // 更新显示
    // window.scrollTo(0, document.body.scrollHeight)
    // }
    sendClick() {
        const from = this.props.user._id
        const to = this.props.params.to_userid
        const content = this.state.content.trim()
        if (content) {
            this.props.sendMsg({ from, to, content })
        }

        this.setState({
            content: '',
            isShow: false
        })
    }
    toggleShow() {
        const isShow = !this.state.isShow
        this.setState({ isShow })
        if (isShow) {
            // 修复Gride的一个bug
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'))
            }, 0);
        }
    }
    message_ItemClick(item, index) {
        console.log("这是message点击" + item + index)
    }
    emoji_ItemClick(item, index) {
        console.log("这是emoji点击" + item + index)
        this.setState({ content: this.state.content + item.text })
    }
    handleChange(name, val) {
        this.setState({
            [name]: val
        })
    }
    goBack() {
        // this.props.navigate.goBack()
        // this.props.location.go(-1)
        console.log("来这了吗")
        this.props.navigate(-1)
    }

    render() {
        let { users, chats } = this.props
        let { _id } = this.props.user
        let { to_userid } = this.props.params
        if (!users[_id]) {
            return null
        }
        // console.log("这是_id:" + _id)
        // console.log("这是to_userid:" + to_userid)
        console.log("这是users:" + JSON.stringify(this.props))

        // console.log("这是to_userid:" + to_userid)
        // console.log("这是chats:" + JSON.stringify(chats))
        const toHeader = users[to_userid].header
        console.log("这是to_Header:" + toHeader)
        const toHeaderIcon = toHeader ? require(`../../assets/images/${toHeader}.png`) : null
        // window.scrollTo(0, document.body.scrollHeight)
        return (
            <div id='chat-page'>
                <NavBar className='stick-header' icon={<Icon type="left" />} onLeftClick={() => this.goBack()}>{users[to_userid].username}</NavBar>
                {/* 列表 */}
                <List style={{ marginBottom: 50, marginTop: 50 }}>
                    {
                        chats.map((msg, index) => {
                            // 对方发送给我的
                            if (msg.to === _id) {
                                return (
                                    <List.Item
                                        key={index}
                                        thumb={toHeaderIcon}
                                        onClick={val => this.message_ItemClick()}
                                    >
                                        {msg.content}
                                    </List.Item>

                                )
                            } else {
                                return (
                                    <List.Item
                                        key={index}
                                        // thumb={toHeaderIcon}
                                        className='chat-me'
                                        onClick={val => this.message_ItemClick()}
                                    >

                                        {msg.content}
                                        <img src={toHeaderIcon} width={30} height={30} style={{ borderRadius: 4, marginLeft: 15 }} />
                                    </List.Item>

                                )
                            }

                        })
                    }
                </List>
                {/* 下面的tabbar */}
                <div className='chat-bottom-bar'>
                    <InputItem
                        placeholder="请输入"
                        onChange={(val) => this.setState({ content: val })}
                        onFocus={() => { this.setState({ isShow: false }) }}
                        value={this.state.content}
                        extra={
                            <div>
                                <span onClick={val => this.toggleShow()}>😊</span>
                                <span onClick={val => this.sendClick()} style={{ marginLeft: 10 }}>发送</span>
                            </div>
                        }
                    />

                    {
                        this.state.isShow ? (
                            <EmojiBoard itemClick={(val, index) => this.emoji_ItemClick(val, index)} />
                        ) : null
                    }
                </div>
            </div>
        )
    }
}


const emojis = ['😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀'
    , '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣'
    , '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣'
    , '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣', '😀', '😁', '🤣']
const emojis_data = emojis.map(value => ({ text: value }))

function EmojiBoard(props) {
    return (
        <Grid
            data={emojis_data}
            columnNum={8}
            carouselMaxRow={4}
            isCarousel={true}
            onClick={(item, index) => {
                props.itemClick(item, index)
            }}
        />
    )
}

function widthRouter(Component) {
    // 函数组件
    function ComponentWithRouterProp(props) {
        // 使用参数
        let params = useParams()
        let navigate = useNavigate()
        let location = useLocation()
        return (
            <Component {...props} params={params} navigate={navigate} location={location}></Component>
        )
    }
    return ComponentWithRouterProp
}

const mapStateToProps = (state) => {
    return { user: state.user, users: state.msgList.users, chats: state.msgList.chats }
}

const mapDispatchToProps = {
    sendMsg,
    getMsgList2,
    markReadMsg
}
export default connect(mapStateToProps, mapDispatchToProps)(widthRouter(Chat))