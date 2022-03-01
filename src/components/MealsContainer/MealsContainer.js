import React from 'react'
import MealCard from '../MealCard/MealCard'

import './MealsContainer.css'




const MealsContainer = ({ Meals }) => {
    return (
        <>
            {Meals ?
                <div className='meals-container'>
                    {Meals.map((meal) => {
                        return (

                            <div key={meal.idMeal}><MealCard meal={meal} /></div>
                        )
                    })}
                </div> : <h1 style={{ textAlign: 'center', marginTop: '7px', color: 'red' }}>No Such Meal Exists...</h1>}</>
    )
}

export default MealsContainer