import React, { Component } from "react";
import { connect } from 'react-redux'
import UserList from "../../components/user-list/user-list";
class DaShen extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <UserList userList={this.props.userList}></UserList>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(DaShen)