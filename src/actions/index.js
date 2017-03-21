import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

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
        })
    }

}