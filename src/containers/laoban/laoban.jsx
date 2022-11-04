import React, { Component } from "react";
import {connect} from 'react-redux'
class LaoBan extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>laoban</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(LaoBan)