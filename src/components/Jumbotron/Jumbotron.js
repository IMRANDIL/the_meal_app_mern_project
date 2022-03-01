import React, { useContext } from 'react'

import './Jumbotron.css'

import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { myContext } from '../../context'
import axios from 'axios'







const Jumbotron = () => {



    const { setMeals, setIsLoading, searchInput, setSearchInput } = useContext(myContext)



    const handleSearch = async () => {
        setIsLoading(true)
        const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
        setMeals(meals);
        setIsLoading(false)
    }

    return (
        <div className='jumbotron'>
            <h1>Welcome</h1>
            <h2>Search Your Favourite Meal Here...</h2>
            <InputGroup className="mb-3 btn-input mt-3">
                <FormControl
                    placeholder="Search A Meal..."
                    aria-label="Meal Search"
                    aria-describedby="meal-search-btn"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button variant="danger" id="meal-search-btn" onClick={handleSearch}>
                    Button
                </Button>
            </InputGroup>

        </div>
    )
}

export default Jumbotron