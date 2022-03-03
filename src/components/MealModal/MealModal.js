import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';


import { myContext } from '../../context'


import axios from '../../Axios'






const MealModal = ({ strMeal, strInstructions, idMeal }) => {


    const { user, setUser } = useContext(myContext)



    const [show, setShow] = useState(false);
    const [showmsg, setShowMsg] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleAddFavourites = () => {

        axios.post(`/add-favourites`, { mealId: idMeal }).then(({ data }) => {
            setUser(data);
            setShowMsg('Meal Added to the Favourites')



        }
        ).catch((err) => console.log(err))


    }









    const handleRemoveFav = () => {

        axios.post(`/remove-favourites/`, { mealId: idMeal }).then(({ data }) => {
            setUser(data);
            setShowMsg('Meal removed from the Favourites')



        }
        ).catch((err) => console.log(err))


    }





    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                See More
            </Button>

            <Modal show={show} onHide={handleClose}>
                {showmsg && <h4 style={{ textAlign: 'center', color: 'red' }}>{showmsg}</h4>}
                <Modal.Header closeButton>
                    <Modal.Title>{strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{strInstructions}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>


                    {user && (
                        <>
                            {user.favourites.includes(idMeal) ?

                                <Button variant='danger' onClick={handleRemoveFav}>Remove Favourites</Button> : <Button variant="primary" onClick={handleAddFavourites}>
                                    Add to Favourites
                                </Button>}
                        </>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MealModal