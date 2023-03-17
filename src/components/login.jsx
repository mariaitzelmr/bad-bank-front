import { UserContext } from "./SpaComponent";
import React from 'react';

export default function LoginComponent(){
    const { usersList, setLoginUser, loginUser } = React.useContext(UserContext);
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus] = React.useState(['', '']);

    function loginFunction(){
        const userIndex = validateUsername();
        if (userIndex < 0) return;
        if (validatePassword(userIndex)) return;
        setLoginUser(usersList[userIndex]);
        setUser('');
        setPassword('');
        setStatus(['', ''])
    }

    function validateUsername(){
        const userIndex = usersList.findIndex((userRow) => userRow.name === user);
        const error = userIndex < 0 ? 'Usuario no registrado' : '';
        setStatus([error, status[1]]);
        setTimeout(() => {
            setStatus(['', ''])
        }, 1500);
        return userIndex;
    }

    function validatePassword(userIndex){
        const error = usersList[userIndex].password === password ? '' : 'Wrong Password';
        setStatus([status[0], error])
        setTimeout(() => {
            setStatus(['', ''])
        }, 1500);
        return error;
    }

    return (
        <div className="row" style={{width: '50%'}}>
            <div>
                Username  <span className="validation-error">{status[0]}</span> <br/>
                <input type="text" className="form-control" value={user} onChange={e => setUser(e.target.value)} /> <br/>
            </div>
            <div>
                Password <span className="validation-error">{status[1]}</span> <br/>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} /> <br/>
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className='btn btn-primary' onClick={loginFunction} disabled={!user && !password}>Login</button>
                { loginUser && <button className='btn btn-primary' onClick={() => setLoginUser(null)}>Logout</button> }
            </div>
        </div>
    );
}
