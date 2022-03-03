import React, { useContext, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap';
import { myContext } from '../../context'







const Favourites = () => {



    const { user } = useContext(myContext);



    useEffect(() => {

        // www.themealdb.com/api/json/v1/1/lookup.php?i=52772




    }, [])








    if (!(user.favourites.length)) {
        return <div>
            <h3>You don't have any favourites yet.</h3>
            <LinkContainer to='/'>
                <Button>Please Add Favourites First</Button>
            </LinkContainer>
        </div>
    }





    return (
        <div>
            <h2>Your Favourites :)</h2>
            { }
        </div>
    )
}

export default Favourites