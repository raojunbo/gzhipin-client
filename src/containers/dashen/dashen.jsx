import React, { Component } from "react";
import { connect } from 'react-redux'
import UserList from "../../components/user-list/user-list";

import { getUserList } from '../../redux/actions'
class DaShen extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserList('laoban')
    }
    render() {
        return (
            <UserList userList={this.props.userList}></UserList>
        );
    }
}

const mapStateToProps = (state) => {
    return { userList: state.userList }
}

const mapDispatchToProps = {
    getUserList
}
export default connect(mapStateToProps, mapDispatchToProps)(DaShen)