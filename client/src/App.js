import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './index';

import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
    const { store } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    return (
        <div className="App">
            <h1>{store.isAuth ? `The user is authorized ${store.user.email}` : 'Please, log in!'}</h1>
            <LoginForm />
        </div>
    );
}

export default observer(App);
