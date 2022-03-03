import React, { useContext, useEffect } from 'react'


import './Home.css'

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import MealsContainer from '../../components/MealsContainer/MealsContainer';
import { myContext } from '../../context';







const Home = () => {

    const { Meals, setMeals, isloading, setIsLoading } = useContext(myContext)


    useEffect(() => {

        try {
            const fetchMeal = async () => {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);

                const { meals } = await response.json();

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