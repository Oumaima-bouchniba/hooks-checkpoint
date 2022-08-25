import React from "react";
import { useNavigate } from "react-router-dom";
import MoviesCard from "./MoviesCard";


export default function MoviesList({ moviesData, search, rating }) {

    // const filteredMovies = JSON.parse(sessionStorage.getItem("moviesData")).filter((movie) => {
    //     return movie.title.toLowerCase().includes(search.toLowerCase());
    // });
    const navigate = useNavigate();
    const filteredMovies = moviesData.filter((movie) => {
        rating = parseInt(rating);
        return rating 
                ? movie.title.toLowerCase().includes(search.toLowerCase()) && movie.rate === rating 
                : movie.title.toLowerCase().includes(search.toLowerCase());
    });

    
    function openDetails(movie){
        console.log("details");
        navigate('/details', {state: movie})
    }


    return (
        <div className="d-flex">
            {console.log(filteredMovies)}

            {
                filteredMovies.map((movie, key) => (
                    <div onClick={() => {
                        navigate('/details', {state: {movie}});
                      }}>
                        <MoviesCard key={key} movie={movie} />
                    </div>
                    
                ))}

        </div>
    );
}
