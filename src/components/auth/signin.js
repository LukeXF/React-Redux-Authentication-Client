import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
        // TODO code to log user in
    }

    render() {

        const { handleSubmit, fields: { email, password } } = this.props;

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                <fieldset className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Field {...email} type="email" name="email" className="form-control" component="input" />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="password" >Password:</label>
                    <Field {...password} type="password" name="password" className="form-control" component="input" />
                </fieldset>

                <button action="submit" className="btn btn-primary">Sign In</button>

            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);