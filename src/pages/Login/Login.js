import axios from '../../Axios'
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../context'

import './Login.css'








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


            const { data } = await axios.post('/login', { email, password });
            // console.log(data);

            localStorage.setItem('token', data.token)
            setUser(data)
            navigate('/');


        } catch (error) {
            // console.log(error.response);
            return setLoginErr(error.response.data)
            // console.log(error.response.data.error);

        }



    }







    return (

        <Form onSubmit={handleLogin} className='form'>

            <h3 style={{ textAlign: 'center', color: 'firebrick', marginTop: '12px' }}>{loginErr}</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '5px' }} />
                <Form.Text className="text-muted" style={{ fontSize: '20px' }}>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '5px' }} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ marginTop: '25px' }}>
                Login
            </Button>
        </Form>
    )
}

export default Login