import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';
import { CheckoutContext, DataContext, BookContext, UserContext } from '../../App';

const Checkout = () => {

    const [checkout, setCheckout] = useContext(CheckoutContext);
    const [books, setBooks] = useContext(BookContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [cart, setCart] = useState({})

    let name, price, imageUrl;

    if (loggedInUser.name) {

        const Items = books.filter(item => item._id === checkout)
        name = Items[0].bookName;
        price = Items[0].price;
    }




    return (
        <div className="container">
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-secondary">
                        <td>{name}</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;