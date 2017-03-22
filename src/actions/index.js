import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER
} from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

    return function(dispatch) {
        // Submit email/password to server
        axios.post(`${API_URL}/signin`, { email, password })
        .then(response => {
            // If request good
            // - Update state to indicate user is authenticated
            dispatch({ type: AUTH_USER });

            // - Save JWT token to local storage
            localStorage.setItem('token', response.data.token);

            // - redirect to the protected route
            browserHistory.push('/feature');
        })
        .catch(() => {
            // If request bad
            // - Show an error to user
            dispatch(authError('Error! Please check your email and password.'));
        })
    }

}

export function signupUser({ email, password }) {
    return function (dispatch) {
        axios.post(`${API_URL}/signup`, { email, password })
        .then(response => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch(({ response }) => {
            dispatch(authError(response.data.error));
        });
    }
}

export function signoutUser() {
    // remove token from local storage
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}