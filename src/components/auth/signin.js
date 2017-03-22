import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
        // TODO code to log user in
        this.props.signinUser({ email, password });
    }
    renderError() {
        if(this.props.errorMessage) {
            return <div className="alert alert-danger">{this.props.errorMessage}</div>;
        }
    }

    render() {

        const { handleSubmit, fields: { email, password } } = this.props;



        return(
            <div className="well">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                    <fieldset className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field {...email} type="email" name="email" className="form-control" component="input" />
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="password" >Password:</label>
                        <Field {...password} type="password" name="password" className="form-control" component="input" />
                    </fieldset>

                    {this.renderError()}

                    <button action="submit" className="btn btn-primary btn-block">Sign In</button>

                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signin = reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);

export default Signin = connect(mapStateToProps, actions)(Signin);