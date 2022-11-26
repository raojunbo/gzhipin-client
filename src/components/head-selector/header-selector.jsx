import React, { Component } from "react";
import { List, Grid } from "antd-mobile";
import ProTypes from 'prop-types'

export default class HeaderSelector extends Component {
    static propTypes = {
        setHeader: ProTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            icon: null
        }
        this.headerList = []
        for (let i = 0; i < 20; i++) {
            this.headerList.push(
                {
                    text: '头像' + (i + 1),
                    // 采用require引用
                    icon: require(`../../assets/images/头像${i + 1}.png`)
                    // icon: require(`./images/头像${i + 1}.png`)
                }
            )
        }
        console.log(this.headerList)
    }
    handlerClick(item, index) {
        this.setState({
            icon: item.icon
        })
        this.props.setHeader(item.text)
    }
    render() {
        const { icon } = this.state
        let listHeader = '请选择头像'
        if (icon) {
            listHeader = (
                <div>
                    已经选择头像：
                    <img src={icon} width={64} height={64} fit='cover' style={{ borderRadius: 4 }} />
                </div>
            )
        }
        return (
            <List header={listHeader}>
                <Grid columns={5} gap={8} >
                    {
                        this.headerList.map((item, index) => {
                            return (
                                <Grid.Item key={index}  >
                                    <div className='grid_item_block' onClick={() => this.handlerClick(item, index)}>
                                        <img src={item.icon} width={64} height={64} fit='cover' style={{ borderRadius: 4 }} />
                                        <div >头像{(index + 1)}</div>
                                    </div>
                                </Grid.Item>
                            )
                        })
                    }
                </Grid>
            </List>
        )
    }
}
