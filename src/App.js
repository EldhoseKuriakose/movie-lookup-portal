import React from 'react';
import Navbar from './components/Navbar/Navbar.component';
import MovieList from './components/MovieList/MovieList.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
