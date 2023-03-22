import React from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <div>Login page</div>
            <NavLink to='/registration'>
                <button>Registration</button>
            </NavLink>
        </div>
    );
}

export default Login;