import React from 'react'
import { Button, Card } from 'react-bootstrap'

import './MealCard.css'




const MealCard = ({ meal: { strMeal, strMealThumb } }) => {
    return (
        <Card style={{ width: '18rem', marginTop: '8px' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>

                <Button variant="primary">See More</Button>
            </Card.Body>
        </Card>
    )
}

export default MealCard