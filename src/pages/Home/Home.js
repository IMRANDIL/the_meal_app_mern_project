import React, { useContext, useEffect } from 'react'

import axios from 'axios'
import './Home.css'

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import MealsContainer from '../../components/MealsContainer/MealsContainer';
import { myContext } from '../../context';







const Home = () => {

    const { Meals, setMeals, isloading, setIsLoading } = useContext(myContext)


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


    }, [setMeals, setIsLoading])



    return (
        <div>
            <Jumbotron />
            {isloading ? <h1 style={{ textAlign: 'center', color: 'pink', marginTop: '7px' }}>Loading...</h1> :
                <MealsContainer Meals={Meals} />}
        </div>
    )
}

export default Home