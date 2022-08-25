import React, { useState } from "react";
import AddModal from "./AddModal";
import MoviesList from "./MoviesList";
import Search from "./Search";
import Rating from "./Rating";
import { data } from "../moviesData";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Home() {
    const [moviesData, setMoviesData] = useState(data);

    const [search, setSearch] = useState("");
    const [rating, setRating] = useState("");
    const addMovies = (newMovies) => {
        setMoviesData([...moviesData, { ...newMovies, id: Math.random() }]);
        sessionStorage.setItem(
            "moviesData",
            JSON.stringify([...moviesData, { ...newMovies, id: Math.random() }])
        );
    };

    return (
        <div>
              <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <AddModal addMovies={addMovies} />
          </Nav>
        </Container>
      </Navbar>
            <Search search={search} setSearch={setSearch} />
            <Rating rating={rating} setRating={setRating} />
            
            <MoviesList moviesData={moviesData} search={search} rating={rating} />
           
        </div>
    );
}