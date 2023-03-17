import React from 'react';
import { Card, Container } from 'react-bootstrap';
import LoginComponent from './login';
import { UserContext } from './SpaComponent';

export default function Home(){
    const { loginUser } = React.useContext(UserContext);
    return (
        <Container>
            <Card style={{ width: "85%", margin: "0.2rem" }}>
               <Card.Img height="400px" src="https://fastly.picsum.photos/id/288/3888/2592.jpg?hmac=pTLH4CMKuWqYGdf3jG4X_QBlbsiBuH7KOOnQsiijPks" /> 
                <Card.Body>
                    <Card.Title><h1>Welcome to the Bad Bank {loginUser ? loginUser.name : ''} </h1></Card.Title>
                    <Card.Text as="div" className="row justify-content-between">
                        <div style={{width: 'fit-content'}}>For all your banking needs</div> 
                        <LoginComponent/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}