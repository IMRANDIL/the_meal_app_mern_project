import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { myContext } from '../../context';

import axios from 'axios';




const NavbarElem = () => {


    const { setMeals, setIsLoading, setSearchInput, setError, user } = useContext(myContext)


    const handleBrand = async () => {
        setIsLoading(true)
        const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
        setMeals(meals);
        setIsLoading(false);
        setSearchInput('');
        setError('')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand onClick={handleBrand}>The_Meals</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!user &&
                        <Nav className=" ms-auto">


                            <LinkContainer to='/login'>
                                <Nav.Link onClick={handleBrand}>Login</Nav.Link>

                            </LinkContainer>

                            <LinkContainer to='/signup'>
                                <Nav.Link>Signup</Nav.Link>

                            </LinkContainer>


                        </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarElem