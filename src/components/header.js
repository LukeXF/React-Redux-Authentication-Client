import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

class Header extends Component {

    renderLinks() {

        if(this.props.authenticated == true) {
            return <li className="nav-item">
                        <Link to="/signout" className="nav-link">Sign Out</Link>
                    </li>
        } else {
            return [
                    <li className="nav-item" key={1}>
                        <Link to="/signin" className="nav-link">Sign In</Link>
                    </li>,
                    <li className="nav-item" key={2}>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                ];
        }
    }

    render() {
        return(
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Authentication</Link>
                <ul className="nav navbar-nav navbar-right">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);