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

                            <div key={meal.idMeal}><MealCard {...meal} /></div>
                        )
                    })}
                </div> : <h1 style={{ textAlign: 'center', marginTop: '17px', color: 'white' }}>No Such Meal Exists...</h1>}</>
    )
}

export default MealsContainer