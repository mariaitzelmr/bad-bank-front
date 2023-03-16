import { Card } from "react-bootstrap";

export default function NotLoggedCard(){
    return (
        <Card>
            <Card.Title>You are not logged in your Bad Bank account</Card.Title>
            <Card.Text>You cannot deposit or withdraw elements, login to use your Bad Bank system</Card.Text>
        </Card>
    );
}