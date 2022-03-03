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
        axios.post('/logout').then(() => {

            localStorage.removeItem('token');
            setUser(null);
            return navigate('/')
        }).catch((err) => console.log(err))
    }

    return (
        <Navbar bg="light" expand="lg" fixed='top' style={{

            zIndex: '2400'

        }}>
            <Container>
                <LinkContainer to='/' style={{ fontSize: '30px' }}>
                    <Navbar.Brand onClick={handleBrand} >The_Meals</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!user &&
                        <Nav className=" ms-auto">


                            <LinkContainer to='/login' style={{ fontSize: '20px' }}>
                                <Nav.Link onClick={handleBrand}>Login</Nav.Link>

                            </LinkContainer>

                            <LinkContainer to='/signup' style={{ fontSize: '20px' }}>
                                <Nav.Link>Signup</Nav.Link>

                            </LinkContainer>


                        </Nav>}


                    {user && (

                        <>

                            <LinkContainer to='/favourites' style={{ color: 'black', fontSize: '20px' }}>
                                <Nav.Link onClick={handleBrand} className='ms-auto' >Favourites</Nav.Link>

                            </LinkContainer>
                            <Nav.Link onClick={handleLogout} className='ms-auto' style={{ color: 'red', fontSize: '20px' }}>Logout</Nav.Link>

                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarElem