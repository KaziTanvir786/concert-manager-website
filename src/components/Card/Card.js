import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGuitar } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = (props) => {
    const { name, genre, country, vocal, img, year, bookingCost } = props.band;
    const addIcon = <FontAwesomeIcon icon={faPlus} />
    const guitarIcon = <FontAwesomeIcon icon={faGuitar} />
    return (
        // showing cards including each bands information
        <div className="card">
            <h4 className="card-title">{guitarIcon} {name}</h4>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="card-details">
                <p className="year-text"><small>Since {year}</small></p>
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <button
                onClick={() => props.handleAddButton(props.band)}
                className="btn-add">{addIcon} Add to Concert</button>
        </div>
    );
};

export default Card;