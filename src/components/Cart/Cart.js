import React from 'react';
import Band from '../Band/Band';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    // calculating total
    let total = 0;
    for (const band of cart) {
        total = total + band.bookingCost;
    }
    return (
        // showing cart
        <div className="cart-container">
            <h3 className="cart-title">Selection Summary</h3>
            <div className="selected-bands">
                {
                    cart.map(cart => <Band cart={cart}></Band>)
                }
            </div>
            <table>
                <tbody>
                    <tr>
                        <td className="cart-row-title"><h3>Band selected: </h3></td>
                        <td><h3>{props.cart.length}</h3></td>
                    </tr>
                    <tr>
                        <td className="cart-row-title"><h3>Total Charge: </h3></td>
                        <td><h3>${total}</h3></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;