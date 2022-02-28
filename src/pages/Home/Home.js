import React, { useEffect, useState } from 'react'

import axios from 'axios'
import './Home.css'

import Jumbotron from '../../components/Jumbotron/Jumbotron';







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
        </div>
    )
}

export default Home