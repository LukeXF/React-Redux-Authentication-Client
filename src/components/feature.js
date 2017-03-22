import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Protected Feature Page</h1>
                <p>This should only be visible after successfully signing in.</p>
            </div>
        );
    }
}

export default Feature;