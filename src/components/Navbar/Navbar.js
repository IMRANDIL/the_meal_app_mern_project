import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { myContext } from '../../context';
import { useNavigate } from 'react-router-dom';

import axios from '../../Axios'



const NavbarElem = () => {

    const navigate = useNavigate();


    const { setMeals, setIsLoading, setSearchInput, setError, user, setUser } = useContext(myContext)


    const handleBrand = async () => {
        setIsLoading(true)
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
        const { meals } = await response.json();
        setMeals(meals);
        setIsLoading(false);
        setSearchInput('');
        setError('')
    }



    const handleLogout = () => {
        axios.post('/logout').then((res) => {
            localStorage.removeItem('token');
            setUser(null);
            return navigate('/')
        }).catch((err) => console.log(err))
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


                    {user && (

                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>


                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarElem