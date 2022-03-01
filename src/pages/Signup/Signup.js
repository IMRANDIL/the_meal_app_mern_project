import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import { myContext } from '../../context';








const Signup = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')



    const { setUser } = useContext(myContext)


    const handleSignup = async (e) => {
        e.preventDefault()

        try {

            if (!userName || !email || !password) {
                return setError('Please Fill All The Fields')
            }


            const { data } = await axios.post('http://localhost:5000/users', { userName, email, password });

            setUser(data)
            navigate('/login')

        } catch (error) {
            return setError('Email Already Exists!!')

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
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Signup