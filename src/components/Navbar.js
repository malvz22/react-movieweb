import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <Navbar fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand>Cinema XXII</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>Action</Nav.Link>
                        <Nav.Link>Thriller</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavigationBar;