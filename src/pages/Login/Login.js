import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../context'










const Login = () => {

    const navigate = useNavigate();

    const [loginErr, setLoginErr] = useState('')


    const { email, setEmail, password, setPassword, setUser } = useContext(myContext)





    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            if (!email || !password) {
                return setLoginErr('Please Fill All The Fields')
            }


            const data = await axios.post('http://localhost:5000/login', { email, password });
            console.log(data);


            // setUser(data)
            // navigate('/');


        } catch (error) {
            // console.log(error.response);
            return setLoginErr(error.response.data)
            // console.log(error.response.data.error);

        }



    }







    return (

        <Form onSubmit={handleLogin}>

            <h3 style={{ textAlign: 'center', color: 'firebrick', marginTop: '12px' }}>{loginErr}</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default Login