import React from 'react';
import './Band.css';
const Band = (props) => {
    const { name, img } = props.cart;
    return (
        // showing bands name and picture in summary section
        <div className="band-list-item">
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Band;