import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            <div className="top-bar">
                <h4>Make your own concert with your favourite bands.</h4>
                <h2>Budget: 15000000</h2>
            </div>
            <nav className="navbar">
                <p><a href="/home">Home</a></p>
                <p><a href="/dashboard">Dashboard</a></p>
                <p><a href="/join">Join</a></p>
            </nav>
        </div>
    );
};
export default Header;