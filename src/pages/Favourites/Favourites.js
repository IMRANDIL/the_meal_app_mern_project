import React, { useContext, useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap';
import { myContext } from '../../context'

// import axios from '../../Axios'

import './Favourites.css'

import MealCard from '../../components/MealCard/MealCard'



const Favourites = () => {

    const [fav, setFav] = useState([])

    const { user } = useContext(myContext);



    useEffect(() => {

        // www.themealdb.com/api/json/v1/1/lookup.php?i=52772

        if (user.favourites.length) {
            const fetchId = user.favourites.map((favourite) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favourite}`).then((res) => res.json()).catch((err) => console.log(err)));
            Promise.all(fetchId).then((res) => setFav(res)).catch((err) => console.log(err))
        }




    }, [user.favourites])








    if (!(user.favourites.length)) {
        return <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h3 style={{ color: 'pink' }}>You don't have any favourites yet.</h3>
            <LinkContainer to='/'>
                <Button variant='danger'>Please Add Favourites First</Button>
            </LinkContainer>
        </div>
    }










    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Your Favourites :)</h2>
            <div className='meals-container'>
                {fav.map(({ meals: meal }) => {
                    return (

                        <div key={meal[0].idMeal}><MealCard {...meal[0]} /></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favourites