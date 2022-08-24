import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";


import './style.css';


export default function Search({ search, setSearch }) {
    console.log("search", search);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
  
    return (
        <Form >
            <div className="form-group">
            <FormControl
                type="search"
                placeholder="Search By name"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
                value={search}
            />
            </div>
            <Button className="search-button" >Search </Button> 
                  <br/>

               
        </Form>
        
        
    );
}
