import React from "react";

import { Form, Button, FormControl, } from "react-bootstrap";
import './style.css';

export default function Rating({ rating, setRating }) {
    console.log("rating", rating);
    const handleRating = (ratingInput) => {
        setRating(ratingInput.target.value);
    };

    return (

        // <Form >
        // <div className="form-group">
        //     <box>
        //     <Typography component="legend">search by ratings stars</Typography>
        //     <input name="customized-10"  onChange={handleRating}
        //     value={rating} max={10} />
        //     </box>
        //     </div>
        //     <Button className="search-button" >Search </Button>
        //     <h1>Liste</h1> 
        //     <br/>
        //     </Form>

        <Form >
            <div className="form-group">
            <FormControl
                type="number"
                placeholder="Search By rating"
                className="me-2"
                aria-label="Search"
                onChange={handleRating}
                value={rating}
            />
            </div>
            <Button className="search-button" >Search </Button> 
                  <br/>

               
        </Form>
    );

}