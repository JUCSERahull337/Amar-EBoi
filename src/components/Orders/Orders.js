import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DataContext, BookContext, UserContext } from '../../App';
import './Orders.css';

const Orders = () => {

    const [books, setBooks] = useContext(BookContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        fetch('https://obscure-falls-34966.herokuapp.com/getOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])

    const history = useHistory();

    return (
        <div className="">
            <div className="tableField">
                <table className="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Ordered By</th>
                        </tr>
                    </thead>

                    {
                        orderData.map(order =>
                            <tbody>
                                <tr className="table-secondary">
                                    <td>{order.bookName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.name}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default Orders;