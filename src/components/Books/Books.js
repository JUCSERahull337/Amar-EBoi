import React from 'react';
import './Books.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Books = (props) => {
    console.log(props)
    const {Name , imgUrl, Price}= props.book
    return (
            <div className="d-flex flex-row books-card">
                <div className="card col-lg-3 md-3 mx-5 my-3 " style={{'width': '18rem'}}>
                    <img src={imgUrl} className="card-img-top" alt="not found"/>
                        <div className="card-body">
                            <h5 className="card-title">{Name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="d-flex justify-content-around">
                                <button className="btn btn-primary" onClick={() => props.handleAddBook(props.book)}>
                                    <FontAwesomeIcon icon={faShoppingCart}/> Buy</button>
                                <span>Price:${Price}</span>
                            </div>
                        </div>
                </div>
            </div>
    );
};

export default Books;