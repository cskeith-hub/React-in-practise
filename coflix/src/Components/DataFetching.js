import {useState, useEffect } from "react";
import apiKey from "../Config";
import MovieCard from "./MovieCard";

function DataFetching() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key='+ apiKey.movieKey)
         .then((data) => data.json())
         .then(data => {
            setMovies(data.results)
         })
       }, []);
       console.log(movies)
  return (
    <div className="Movies">
        {movies.map(movie =>(
            <div className="movieTitle">{movie.title}</div>
            
        ))}
    </div>
    );
}

export default DataFetching