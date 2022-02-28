import React from 'react'
import MealCard from '../MealCard/MealCard'

import './MealsContainer.css'




const MealsContainer = ({ Meals }) => {
    return (
        <div className='meals-container'>
            {Meals.map((meal) => {
                return (
                    <div key={meal.idMeal}><MealCard meal={meal} /></div>
                )
            })}
        </div>
    )
}

export default MealsContainer