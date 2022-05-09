import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarCompont() {
    return (
        <>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='corDestaque font-weight-bold'>Portifólio</div>
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link href="#anchor1" className="me-1">
                                    Sobre mim
                                </Nav.Link>
                                <Nav.Link href="#anchor2" className="me-1">
                                    Projetos
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}