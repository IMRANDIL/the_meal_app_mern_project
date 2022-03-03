import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';


import { myContext } from '../../context'


import axios from '../../Axios'






const MealModal = ({ strMeal, strInstructions, idMeal }) => {


    const { user } = useContext(myContext)



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleAddFavourites = () => {

        axios.post(`/favourites/`, { mealId: idMeal }).then((res) => console.log(res)).catch((err) => console.log(err))


    }





    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                See More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{strInstructions}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {user &&
                        <Button variant="primary" onClick={handleAddFavourites}>
                            Add to Favourites
                        </Button>}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MealModal