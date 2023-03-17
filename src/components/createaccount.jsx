import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { UserContext } from './SpaComponent';
import { validateEmptyFields, validateEmailFormat, validateStringLength } from '../validations';

export default function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(['Name is empty', 'Email is empty', 'Set a password with a minimum lenght of 8 chars']);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { usersList, setUsersList } = React.useContext(UserContext);
    let buttonDisabled = status.reduce((accu, currentStatus) => {
        return accu || currentStatus;
    }, false);

    function validateName(nameField){
        const errorMessage = validateEmptyFields(nameField);
        setStatus([errorMessage, status[1], status[2]]);
        setName(nameField);
    };

    function validateEmail(emailField){
        const errors = [validateEmptyFields(emailField), validateEmailFormat(emailField)];
        const newStatus = errors[0] ? errors[0] : errors[1];
        setStatus([status[0], newStatus, status[2]]);
        setEmail(emailField);
    }

    function validatePassword(passwordField){
        const errors = [validateEmptyFields(passwordField), validateStringLength(passwordField, 8)];
        const newStatus = errors[0] ? errors[0] : errors[1];
        setStatus([status[0], status[1], newStatus]);
        setPassword(passwordField);
    }

    function handleCreate(){
        const id = usersList.length + 1;
        const newUserslist = [...usersList, {id, name, email, password, balance:100}];
        setUsersList(newUserslist);
        setShow(false);
    };

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setStatus(['Name is empty', 'Email is empty', 'Set a password with a minimum lenght of 8 chars']);
    };

    return (
        <Container>
            <Card>
                <Card.Title>Create Account</Card.Title>
                <Card.Text as="div">
                    {
                        show ? (
                            <div>
                                Name <span className="validation-error">{status[0]}</span> <br />
                                <input type="input" className="form-control" id="name" placeholder="Enter name"
                                value={name} onChange={e => validateName(e.currentTarget.value)} /><br />

                                Email Address <span className="validation-error">{status[1]}</span> <br />
                                <input type="input" className="form-control" id="email" placeholder="Enter email"
                                value={email} onChange={e => validateEmail(e.currentTarget.value)} /><br />

                                Password <span className="validation-error">{status[2]}</span> <br />
                                <input type="password" className="form-control" id="password" placeholder="Enter password"
                                value={password} onChange={e => validatePassword(e.currentTarget.value)} /><br />
                                
                                <button type="submit" className="btn btn-primary" onClick={handleCreate} disabled={buttonDisabled}>
                                    Create Account
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h5>Success</h5>
                                <button type="submit" className="btn btn-primary" onClick={clearForm}>Add another account</button>
                            </div>
                        )
                    }
                </Card.Text>
            </Card> 
        </Container>
    );
}