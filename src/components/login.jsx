import { UserContext } from "./SpaComponent";
import { Container } from "react-bootstrap";
import React from 'react';

export default function LoginComponent(){
    const { usersList, setLoginUser, loginUser } = React.useContext(UserContext);
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus] = React.useState(['', '']);

    function loginFunction(){
        const userIndex = validateUsername();
        if (userIndex < 0) return;
        console.log('validated user');
        if (validatePassword(userIndex)) return;
        console.log('logged');
        setLoginUser(usersList[userIndex]);
    }

    function validateUsername(){
        const userIndex = usersList.findIndex((userRow) => userRow.name === user);
        const error = userIndex < 0 ? 'Usuario no registrado' : '';
        setStatus([error, status[1]]);
        return userIndex;
    }

    function validatePassword(userIndex){
        const error = usersList[userIndex].password === password ? '' : 'Wrong Password';
        setStatus([status[0], error])
        return error;
    }

    return (
        <Container>
            { loginUser && <button className='btn btn-primary' onClick={() => setLoginUser(null)}>Logout</button> }
            Username <br/>
            <input type="text" value={user} onChange={e => setUser(e.target.value)} /> <br/>
            {status[0]} <br/>
            Password <br/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br/>
            {status[1]} <br/>
            <button type="submit" className='btn btn-primary' onClick={loginFunction} disabled={!user && !password}>Login</button>
        </Container>
    );
}