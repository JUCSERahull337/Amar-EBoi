import React, { useContext, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckoutContext, DataContext, BookContext, UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Home = (props) => {

    const { bookName, imageUrl, _id, price } = props.data

    const [order, setOrder] = useContext(DataContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [checkout, setCheckout] = useContext(CheckoutContext)
    const [books, setBooks] = useContext(BookContext);

    const [cart, setCart] = useState({})

    const updateOrder = id => {

        const Items = books.filter(item => item._id === id)
        setCheckout(id);

        if (loggedInUser.name) {

            const newCart = { ...Items[0], ...loggedInUser };
            delete newCart._id;
            setCart(newCart);

            fetch('https://obscure-falls-34966.herokuapp.com/orderedBooks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCart)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }

    }

    return (
        
        <div>
            
            { !props ?
           
                <div className="spinner-grow" role="status">
                    <h4> <span className="mx-5"> Loading... </span> </h4>
                    <span className="visually-hidden mx-4"></span>
                </div>: 
                <div className="bookCard">
                    <div>
                        <img src={imageUrl} alt="" />
                        <h4>{bookName}</h4>
                    </div>
                    <div className="Footer d-flex justify-content-around">
                        <h4>${price}</h4>
                        <Link to="/checkout"><button onClick={() => updateOrder(_id)} className="btn btn-warning">BUY</button></Link>
                    </div>

                </div>}
        </div>
    );
};

export default Home;