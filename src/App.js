import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

export default function App() {
    
    return (
        <div>
            <Router>
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/details" element={<MovieDetails />} />

                </Routes>
            </Router>
        </div>
    );
}
