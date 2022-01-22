import  Container  from "react-bootstrap/Container"
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import  NavDropdown  from "react-bootstrap/NavDropdown"
import Cartwidget from "../CartWidget/Cartwidget"


const NavBar = () => {
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="#home"> Chakana Inca </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="#pricing">Beneficios</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Velas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mates</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Sahumerios</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Venta por mayor</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            
                            <Nav.Link eventKey={2} href="#memes">
                                <Cartwidget />
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export default NavBar