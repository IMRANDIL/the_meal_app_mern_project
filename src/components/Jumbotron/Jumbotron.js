import React from 'react'

import './Jumbotron.css'

import { InputGroup, FormControl, Button } from 'react-bootstrap'



const Jumbotron = () => {
    return (
        <div className='jumbotron'>
            <InputGroup className="mb-3 btn-input">
                <FormControl
                    placeholder="Search A Meal..."
                    aria-label="Meal Search"
                    aria-describedby="meal-search-btn"
                />
                <Button variant="danger" id="meal-search-btn">
                    Button
                </Button>
            </InputGroup>

        </div>
    )
}

export default Jumbotron