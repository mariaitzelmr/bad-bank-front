import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const HOME_MESSAGE = 'You can login and logout of the system here! You are always welcome';
    const CREATE_USER_MESSAGE = 'Create new users here!'
    const DEPOSIT_MESSAGE = 'Deposit money to your account here!';
    const WITHDRAW_MESSAGE = 'Withdraw money from your account here!';
    const ALL_DATA_MESSAGE = 'Check out every user registered in the system!';
    const DELAY = { show: 250, hide: 100 };

    function renderTooltip(message){
        return (
            <Tooltip id="button-tooltip">
                {message}
            </Tooltip>
        );
    };

    return (
        <div>
            <Nav 
             className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <Nav.Item>
                    <OverlayTrigger placement='bottom' delay={DELAY} overlay={renderTooltip(HOME_MESSAGE)}>
                        <Nav.Link as={Link} to="/" eventKey="home">
                            Bad Bank
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav.Item>
                <Nav.Item>
                    <OverlayTrigger placement='bottom' delay={DELAY} overlay={renderTooltip(CREATE_USER_MESSAGE)}>
                        <Nav.Link as={Link} to="/CreateAccount/" eventKey="create-account">
                            Create Account
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav.Item>
                <Nav.Item>
                    <OverlayTrigger placement='bottom' delay={DELAY} overlay={renderTooltip(DEPOSIT_MESSAGE)}>
                        <Nav.Link as={Link} to="/deposit/" eventKey="deposit">
                            Deposit        
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav.Item>
                <Nav.Item>    
                    <OverlayTrigger placement='bottom' delay={DELAY} overlay={renderTooltip(WITHDRAW_MESSAGE)}>
                        <Nav.Link as={Link} to="/withdraw/" eventKey="withdraw">    
                            Withdraw        
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav.Item> 
                <Nav.Item>
                    <OverlayTrigger placement='bottom' delay={DELAY} overlay={renderTooltip(ALL_DATA_MESSAGE)}>
                        <Nav.Link as={Link} to="/alldata/" eventKey="all-data">
                            All Data
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav.Item>      
            </Nav>
        </div>
    );
}
