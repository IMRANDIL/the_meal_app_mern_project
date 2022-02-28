import React, { useEffect, useState } from 'react'

import axios from 'axios'
import './Home.css'

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import MealsContainer from '../../components/MealsContainer/MealsContainer';







const Home = () => {

    const [Meals, setMeals] = useState([]);
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {

        try {
            const fetchMeal = async () => {
                const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
                setMeals(meals);
                setIsLoading(false)

            }

            fetchMeal()
        } catch (error) {
            console.log(error);
        }


    }, [])

    console.log(Meals);

    return (
        <div>
            <Jumbotron />
            {isloading ? <h1 style={{ textAlign: 'center', color: 'pink' }}>Loading...</h1> :
                <MealsContainer Meals={Meals} />}
        </div>
    )
}

export default Home