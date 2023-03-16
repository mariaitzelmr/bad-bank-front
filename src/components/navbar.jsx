import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
   
    return (
        <div>
            <Nav 
             className="navbar navbar-expand-lg navbar-light bg-light"
            >
                <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="home">
                        Bad Bank
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/CreateAccount/" eventKey="create-account">
                        Create Account
                    </Nav.Link>
                </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/deposit/" eventKey="deposit">
                                    Deposit
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/withdraw/" eventKey="withdraw">
                                    Withdraw
                                </Nav.Link>
                            </Nav.Item> 
                <Nav.Item>
                    <Nav.Link as={Link} to="/alldata/" eventKey="all-data">
                        All Data
                    </Nav.Link>
                </Nav.Item>      
            </Nav>
        </div>
    );
}
