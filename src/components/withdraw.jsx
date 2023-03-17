import { Card, Container } from 'react-bootstrap';
import { UserContext } from './SpaComponent';
import React, { useEffect } from 'react';
import MoneyMovement from './moneyMovement';
import NotLoggedCard from './logOutCard';

export default function Withdraw(){
    const { usersList, setUsersList, loginUser, setLoginUser } = React.useContext(UserContext);
    const [balance, setBalance] = React.useState(0);
    const [userIndex, setUserIndex] = React.useState(0);
    const [status, setStatus] = React.useState('');

    function updateBalance(withdrawMoney, setWithdrawMoney){
        const error = validateAmount(withdrawMoney);
        if (error) {
            setStatus(error);
        } else {
            const usersListUpdated = [...usersList];
            usersListUpdated[userIndex].balance -= Number(withdrawMoney);
            setUsersList(usersListUpdated);
            setLoginUser(usersListUpdated[userIndex]);
            setStatus('Success')
        }
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

    function validateAmount(declaredAmount){
        const errorMessage = `Failed transaction, there is not enought money in your balance to withdraw this amount`;
        return declaredAmount > usersList[userIndex].balance ? errorMessage : '';
    }

    return (
        <Container>
            <h2>Withdraw</h2>
            {
                loginUser ? (<Card>
                <Card.Title> Balance {balance} {status === 'Success' && <span className='Success'>{status}</span>} </Card.Title>
                <Card.Text as="div">
                {status !== 'Success' && <span className='validation-error'>{status}</span>}
                    <MoneyMovement buttonName="Withdraw" moneyElements={updateBalance}/>
                </Card.Text>
            </Card>)
            :
            (<NotLoggedCard/>)
            }
        </Container>
    );
}