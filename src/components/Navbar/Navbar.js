import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarElem = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>The_Meals</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" ms-auto">


                        <LinkContainer to='/login'>
                            <Nav.Link>Login</Nav.Link>

                        </LinkContainer>

                        <LinkContainer to='/signup'>
                            <Nav.Link>Signup</Nav.Link>

                        </LinkContainer>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarElem