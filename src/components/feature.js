import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return(
            <div className="jumbotron">
                <h1>Protected Feature Page</h1>
                <p>Message below should only be visible after successfully signing in.</p>
                <p>{ this.props.message }</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);