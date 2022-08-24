
import React, { useState } from "react";
import AddModal from "./Components/AddModal";
import MoviesList from "./Components/MoviesList";
import Search from "./Components/Search";
import Rating from "./Components/Rating";
import { data } from "./moviesData";
export default function App() {
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
    console.log(moviesData);
    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <Rating rating={rating} setRating={setRating} />
           
            <MoviesList moviesData={moviesData} search={search} rating={rating} />
            <AddModal addMovies={addMovies} />
        </div>
    );
}
