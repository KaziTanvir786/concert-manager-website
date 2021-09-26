import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = (props) => {
    console.log(props);
    const { id, name, genre, country, vocal, img, year, bookingCost } = props.band;
    const addIcon = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="card">
            <h4 className="card-title">{name}</h4>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="card-details">
                <p><small>Since {year}</small></p>
                <table>
                    <tr>
                        <td className="row-title"><h4>Genre: </h4></td>
                        <td></td>
                        <td>{genre}</td>
                    </tr>
                    <tr>
                        <td className="row-title"><h4>Origin: </h4></td>
                        <td></td>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <td className="row-title"><h4>Vocal: </h4></td>
                        <td></td>
                        <td>{vocal}</td>
                    </tr>
                    <tr>
                        <td className="row-title"><h4>Charge: </h4></td>
                        <td></td>
                        <td><span className="booking-charge">${bookingCost}</span></td>
                    </tr>
                </table>
            </div>
            <button
                onClick={() => props.handleAddButton(props.band)}
                className="btn-add">{addIcon}  Add to Concert</button>
        </div>
    );
};

export default Card;