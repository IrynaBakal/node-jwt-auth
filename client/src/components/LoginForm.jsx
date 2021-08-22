import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import UserService from '../services/UserService';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { store } = useContext(Context);

    return (
        <div>
            <input
                type='text'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <input
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <input
                type='text'
                placeholder='FirstName'
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
            />
            <input
                type='text'
                placeholder='LastName'
                onChange={e => setLastName(e.target.value)}
                value={lastName}
            />
            <button onClick={() => {
                store.login(email, password);
                // getUser();
            }}>Login</button>
            <button onClick={() => store.registration(email, password, firstName, lastName)}>Register</button>
        </div>
    );
};

export default observer(LoginForm);
