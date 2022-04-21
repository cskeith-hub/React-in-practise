import { useEffect } from "react";
import apiKey from "./Config";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";

import "./Styles/style.css"



function App() {
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key='+ apiKey.movieKey)
     .then((data) => data.json())
     .then(data => {
      console.log(data)
     })
   }, []);
 

  return (
   <>
   <Header />
   <MovieList />
   <Footer />
   </>
  );
}

export default App;
