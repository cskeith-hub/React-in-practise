import {useState, useEffect } from "react";
import apiKey from "../Config";
import { v4 as uuidv4 } from 'uuid';

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
            <div className="movie" key={uuidv4()}>
                <div className="movieTitle"><b>{movie.title}</b></div>
            <div className="moviePicture">
                <img src={"https://image.tmdb.org/t/p/w300/"+movie.poster_path} alt="Movie picture"></img>
            </div>
            </div>
        ))}
    </div>
    );
}

export default DataFetching