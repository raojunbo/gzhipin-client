import React, { Component } from "react";
import { connect } from 'react-redux'

class Message extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div>messages</div>);
    }
}


const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Message)