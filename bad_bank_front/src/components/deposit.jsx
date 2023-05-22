import { Card, Container } from 'react-bootstrap';
import { UserContext } from './SpaComponent';
import React, { useEffect } from 'react';
import MoneyMovement from './moneyMovement';
import NotLoggedCard from './logOutCard';

export default function Deposit(){
    const { usersList, setUsersList, loginUser } = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [userIndex, setUserIndex] = React.useState(0);

    function updateBalance(withdrawMoney, setWithdrawMoney){    
        const usersListUpdated = [...usersList];
        usersListUpdated[userIndex].balance += Number(withdrawMoney);
        setUsersList(usersListUpdated);
        setStatus(['Success'])
        setWithdrawMoney(0);
        setTimeout(() => {
            setStatus(['']);
        }, 3000);
    }

    useEffect(() => {
        if (!loginUser) {
            return;
        }
        const index = usersList.findIndex((user) => user.id === loginUser.id);
        setUserIndex(index);
        setBalance(usersList[index].balance);
    }, [usersList, loginUser]);

    return (
        <Container>
            <h2>Deposit</h2>
            {
                loginUser ?
            (<Card>
                <Card.Title> Balance {balance} <span className={status}>{status}</span></Card.Title>
                <Card.Text as="div">
                    <MoneyMovement buttonName="Deposit" moneyElements={updateBalance}/>
                </Card.Text>
            </Card>)
            :
            (<NotLoggedCard/>)
            }
        </Container>
    );
}