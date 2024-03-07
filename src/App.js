import React, { useEffect, useState } from "react";
import './App.css';
import SeachIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = process.env.REACT_APP_URL;
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=371aaeec';


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setSearch()
  }
  useEffect(() => {
    searchMovies('Lift');
  }, [])
  return (
    <div className="app">
      <h1 className="heading">
        MovieFlix
      </h1>
      <div className="search">
        <input
          placeholder="Search for moives"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <img
          src={SeachIcon}
          alt="Search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {
        movies.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          )
          :
          (
            <div className="">
              <h2>No movies Found</h2>
            </div>
          )
      }


    </div>
  )
};

export default App;
