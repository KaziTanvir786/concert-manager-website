import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import './Booking.css';

const Booking = () => {
    const [bands, setBands] = useState([]);

    useEffect(() => {
        fetch('./bands.JSON')
            .then(res => res.json())
            .then(data => setBands(data));
    }, [])

    return (
        <div className="booking-container">
            <div className="cards">
                {
                    bands.map(band => <Card band={band}></Card>)
                }
            </div>
            <div className="cart">
                this is cart
            </div>
        </div>
    );
};

export default Booking;