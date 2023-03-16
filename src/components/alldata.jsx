import React from 'react';
import { UserContext } from './SpaComponent';
import { Table, Container } from 'react-bootstrap';

export default function AllData() {
    const { usersList } = React.useContext(UserContext);
    const usersTableRows = usersList.map((user, index) => {
        return (
            <tr key={`tr${index}`}>
                <td key={`td1-${index}`}> {user.id} </td>
                <td key={`td2-${index}`}> {user.name} </td>
                <td key={`td3-${index}`}> {user.email} </td>
                <td key={`td4-${index}`}> {user.password} </td>
            </tr>
        );
    })

    return (
        <Container>
            <h2>All data</h2>
            <Table striped hover>
                <thead>
                    <tr>
                        <th> # </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    { usersTableRows }
                </tbody>
            </Table>
        </Container>
    );
}
