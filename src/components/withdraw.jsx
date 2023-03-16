import { Card, Container } from 'react-bootstrap';
import { UserContext } from './SpaComponent';
import React from 'react';
import MoneyMovement from './moneyMovement';
import NotLoggedCard from './logOutCard';

export default function Withdraw(){
    const { usersList, setUsersList, loginUser, setLoginUser } = React.useContext(UserContext);

    const [status, setStatus] = React.useState('');

    function updateBalance(withdrawMoney, setWithdrawMoney){
        const error = validateAmount(withdrawMoney);
        if (error) {
            setStatus(error);
        } else {
            const usersListUpdated = [...usersList];
            const userIndex = usersListUpdated.findIndex((user) => user.id === loginUser.id);
            const newBalance = loginUser.balance - Number(withdrawMoney);
            usersListUpdated[userIndex].balance = newBalance;
            setUsersList(usersListUpdated);
            setLoginUser(usersListUpdated[userIndex]);
            setStatus('Success')
        }
        setWithdrawMoney(0);
        setTimeout(() => {
            setStatus(['']);
        }, 3000);
    }

    function validateAmount(declaredAmount){
        const errorMessage = `Failed transaction, there is not enought money in your balance to withdraw this amount`;
        return declaredAmount > loginUser.balance ? errorMessage : '';
    }

    return (
        <Container>
            <h2>Withdraw</h2>
            {
                loginUser ? (<Card>
                <Card.Title> Balance {loginUser.balance} </Card.Title>
                <Card.Text as="div">
                    <h4>Withdraw amount</h4>
                    <MoneyMovement buttonName="Withdraw" moneyElements={updateBalance}/>
                    {status}
                </Card.Text>
            </Card>)
            :
            (<NotLoggedCard/>)
            }
        </Container>
    );
}