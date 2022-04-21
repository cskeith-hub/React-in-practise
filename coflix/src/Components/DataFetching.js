import {useState, useEffect } from "react";
import apiKey from "../Config";

function DataFetching() {
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?api_key='+ apiKey.movieKey)
         .then((data) => data.json())
         .then(data => {
            console.log(data)
            setMovies(data)
         })
       }, []);

  return (
    <div>
        {Movies.title}
        {Movies.release_date}
    </div>
  )
}

export default DataFetching