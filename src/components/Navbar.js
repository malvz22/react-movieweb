import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <Navbar fixed="top" variant="dark">
                <Container>
                    <div className="nav-brand">
                        <Link to={"/"}><Navbar.Brand>Cinema XXII</Navbar.Brand ></Link>
                    </div>
                    <Nav>
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>Action</Nav.Link>
                        <Nav.Link>Thriller</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}

export default NavigationBar;