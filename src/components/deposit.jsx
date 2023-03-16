import { Card, Container } from 'react-bootstrap';
import { UserContext } from './SpaComponent';
import React from 'react';
import MoneyMovement from './moneyMovement';
import NotLoggedCard from './logOutCard';

export default function Deposit(){
    const { usersList, setUsersList, loginUser, setLoginUser } = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');

    function updateBalance(withdrawMoney, setWithdrawMoney){    
        const usersListUpdated = [...usersList];
        const userIndex = usersListUpdated.findIndex((user) => user.id === loginUser.id);
        const newBalance = Number(withdrawMoney) + loginUser.balance;
        usersListUpdated[userIndex].balance = newBalance;
        setUsersList(usersListUpdated);
        setLoginUser(usersListUpdated[userIndex]);
        setStatus(['Success'])
        setWithdrawMoney(0);
        setTimeout(() => {
            setStatus(['']);
        }, 3000);
    }

    return (
        <Container>
            <h2>Deposit</h2>
            {
                loginUser ?
            (<Card>
                <Card.Title> Balance {loginUser.balance} </Card.Title>
                <Card.Text as="div">
                    <h4>Deposit amount</h4>
                    <MoneyMovement buttonName="Deposit" moneyElements={updateBalance}/>
                    {status}
                </Card.Text>
            </Card>)
            :
            (<NotLoggedCard/>)
            }
        </Container>
    );
}