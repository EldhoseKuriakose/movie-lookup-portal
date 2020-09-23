import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.component';
import MovieList from './components/MovieList/MovieList.component';
import MovieDetails from './components/MovieDetails/MovieDetails.component'
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    let search = e.target.value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5cf5b984eb74ef29b0547f15ca455afd&query=${search}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .then(console.log(results));
  }

  const handleDisplayDetails = (e) => {
    e.preventDefault();
    let id = e.target.id;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5cf5b984eb74ef29b0547f15ca455afd`)
      .then(response => response.json())
      .then(data => setDetails(data));
  }

  return (
    <div className="App">
      <Navbar handleChange={handleChange} />
      <MovieList movies={results} handleDisplayDetails={handleDisplayDetails} />
      <MovieDetails movieDetails={details} />
    </div>
  );
}

export default App;
