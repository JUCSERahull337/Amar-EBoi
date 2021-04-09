import React from 'react';
import './BookList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = (props) => {
    const { bookName, _id } = props.data

    const deleteBook = id => {
        const url = `https://obscure-falls-34966.herokuapp.com/deleteBook/${id}`;

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                // console.log("deleted successfully ", id);
            })
    }

    return (
        <div className="BookNameField d-flex justify-content-between my-3">
            <h5> <span className="productName py-3"> {bookName} </span></h5>
            <button onClick={() => deleteBook(_id)} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default BookList;