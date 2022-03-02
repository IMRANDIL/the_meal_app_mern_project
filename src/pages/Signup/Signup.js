import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import axios from '../../Axios'
import { myContext } from '../../context';








const Signup = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');




    const { setUser, email, setEmail, password, setPassword, error, setError } = useContext(myContext)


    const handleSignup = async (e) => {
        e.preventDefault()

        try {

            if (!userName || !email || !password) {
                return setError('Please Fill All The Fields')
            }


            const { data } = await axios.post('/users', { userName, email, password });
            localStorage.setItem('token', data.token)
            setUser(data);


            return navigate('/');



        } catch (error) {

            return setError(error.response.data)
            // console.log(error.response.data.error);

        }



    }







    return (
        <Form onSubmit={handleSignup}>
            <h3 style={{ textAlign: 'center', color: 'firebrick', marginTop: '12px' }}>{error}</h3>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter userName" value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete='off' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} autoComplete='off' />
            </Form.Group>

            <Button variant="primary" type="submit">
                Signup
            </Button>
        </Form>
    )
}

export default Signup