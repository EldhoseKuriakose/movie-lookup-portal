import React from 'react';
import './Navbar.styles.scss';

const Navbar = () => (
    <div className="navbar-container">
        <input className="searchbar" placeholder="Search for movies" />
        <img src="https://www.flaticon.com/svg/static/icons/svg/1086/1086933.svg" alt="search-icon" />
    </div>
);

export default Navbar;