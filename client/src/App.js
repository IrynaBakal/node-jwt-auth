import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import UserService from './services/UserService';

import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
    const { store } = useContext(Context);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Loading ... </div>;
    }

    if (!store.isAuth) {
        return <div>
            <h1>Please, log in!</h1>
            <LoginForm />
        </div>;
    }

    return (
        <div className="App">
            <h1>{`The user is authorized ${store.user.email}`}</h1>
            <button onClick={() => store.logout()}>Logout</button>
            <div>
                <button onClick={getUsers}>Get all users info</button>
            </div>
            {
                users.map(user => <div key={user.email}>
                    {user.email}
                </div>)
            }
        </div>
    );
}

export default observer(App);
