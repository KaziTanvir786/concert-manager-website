import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import Cart from '../../Cart/Cart';
import './Booking.css';

const Booking = () => {
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./bands.JSON')
            .then(res => res.json())
            .then(data => setBands(data));
    }, [])

    const handleAddButton = (band) => {
        const newCart = [...cart, band];
        setCart(newCart);
    }

    return (
        <div className="booking-container">
            <div className="cards">
                {
                    bands.map(band => <Card
                        key={band.id}
                        band={band}
                        handleAddButton={handleAddButton}
                    ></Card>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Booking;