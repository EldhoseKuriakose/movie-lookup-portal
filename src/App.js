import React from 'react';
import Navbar from './components/Navbar/Navbar.component';
import MovieList from './components/MovieList/MovieList.component';
import MovieDetails from './components/MovieDetails/MovieDetails.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
      <MovieDetails />
    </div>
  );
}

export default App;
