import React from 'react'
import { Card } from 'react-bootstrap'
import MealModal from '../MealModal/MealModal'

import './MealCard.css'




const MealCard = ({ meal: { strMeal, strMealThumb, strInstructions } }) => {
    return (
        <Card style={{ width: '18rem', marginTop: '8px' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>

                <MealModal strMeal={strMeal} strInstructions={strInstructions} />
            </Card.Body>
        </Card>
    )
}

export default MealCard