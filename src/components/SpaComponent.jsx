import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';

export const UserContext = React.createContext(null);

export default function Spa() {
    const [usersList, setUsersList] = React.useState([{id: 1, name: 'itzel', email: 'lala@ls.com', password: 'aaa', balance: 100}]);
    const [loginUser, setLoginUser] = React.useState({id: 1, name: 'itzel', email: 'lala@ls.com', password: 'aaa', balance: 100});
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <UserContext.Provider value={{ usersList, setUsersList, loginUser, setLoginUser }} >
                    <Routes>
                        <Route path="/" element={<Home/>} exact />
                        <Route
                            path="/CreateAccount/"
                            exact
                            element={<CreateAccount/>}
                        />
                        <Route path="/deposit/" element={<Deposit/>} exact />
                        <Route path="/withdraw/" element={<Withdraw/>} exact />
                        <Route path="/alldata/" element={<AllData/>} exact />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}