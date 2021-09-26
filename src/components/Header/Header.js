import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            {/* title bar */}
            <div className="top-bar">
                <h1>Concert <span className="text-style-big">Manager</span> | <span className="small-text">Throw a concert now</span> </h1>
                <h3>Budget: <span className="text-style-big">$15000</span></h3>
            </div>
            {/* navbar */}
            <nav className="navbar">
                <p><a href="/home">Home</a></p>
                <p><a href="/dashboard">Dashboard</a></p>
                <p><a href="/join">Join</a></p>
            </nav>
        </div>
    );
};
export default Header;