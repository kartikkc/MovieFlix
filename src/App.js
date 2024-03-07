import React, { useEffect } from "react";
// const API_URL = process.env.API;
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=371aaeec';
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  }
  useEffect(() => {
    searchMovies('Lift');
  },[])
  return (
    <div className="App">
      <h1 className="heading">
        MovieFlix
      </h1>
    </div>
  );
}

export default App;
