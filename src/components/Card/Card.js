import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props.band);
    const { name, genre, country, vocal, img, year, bookingCost } = props.band;
    return (
        <div className="card">
            <h4>{name}</h4>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <p><small>Since: {year}</small></p>
            <p>Booking Cost: ${bookingCost}</p>
            <button className="btn-add">add this band</button>
        </div>
    );
};

export default Card;