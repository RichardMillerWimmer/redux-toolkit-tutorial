import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(login({ name: 'Rich', age: 33, email: 'rich@email.com' }))}
            >Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Login
