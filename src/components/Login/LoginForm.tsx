import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackendConnector from '../../connectors/backendConnector'
import { RootState } from '../../store/store';
import { login } from 'store/users/userSlice';

export default function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const user = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const connector = new BackendConnector();

    const usernameChange = (value) => {
        console.log(value);
        setUsername(value)
    }

    const passwordChange = (value) => {
        console.log(value);
        setPassword(value)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(username);
        console.log(password);
        var result = await connector.login(username, password);

        console.log(result);
        if (result.status === 200) {
            dispatch(login(result.data))
        }
    }

    useEffect(() => {
        console.log({user});
    }, user);

    return (
        <div className="Image-list-layout">
            <form onSubmit={handleLogin}>
                <div>
                    <label>User name:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => usernameChange(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        id="password"
                        type="password"
                        onChange={(e) => passwordChange(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};
