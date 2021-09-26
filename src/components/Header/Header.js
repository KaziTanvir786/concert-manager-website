import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            <div className="top-bar">
                <h3>Make your own <span className="text-style">concert</span> with your favourite bands</h3>
                <h2>Budget: <span className="text-style-big">$1500</span></h2>
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