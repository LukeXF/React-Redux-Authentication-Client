import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {

    handleFormSubmit(formProps) {
        console.log(formProps);
        // TODO code to sign up user
        this.props.signupUser(formProps);
    }

    renderError() {
        if(this.props.errorMessage) {
            return <div className="alert alert-danger">{this.props.errorMessage}</div>;
        }
    }

    renderField(field) {
        return (
            <div>
                <input {...field.input} type={field.type} className="form-control" />
                {field.meta.touched && field.meta.error && <div className="alert alert-danger">{field.meta.error}</div>}
            </div>
        );
    }

    render() {

        const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;

        return(
            <div className="well">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field {...email} type="email" name="email" component={this.renderField} />
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="password" >Password:</label>
                        <Field {...password} type="password" name="password" component={this.renderField} />
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="passwordConfirm">Confirm Password:</label>
                        <Field {...passwordConfirm} type="password" name="passwordConfirm" component={this.renderField} />
                    </fieldset>

                    {this.renderError()}

                    <button action="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Please enter an email.'
    }

    if(!formProps.password) {
        errors.password = 'Please enter a password.'
    }

    if(!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please confirm your password.'
    }

    if(formProps.password != formProps.passwordConfirm) {
        errors.password = 'Passwords must match.';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signup = reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(Signup);

export default Signup = connect(mapStateToProps, actions)(Signup);