import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {


    const [imageUrl, setImageUrl] = useState(null);

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        const bookData = {
            bookName: data.name,
            price: data.price,
            imageUrl: imageUrl
        }

        const url = 'https://obscure-falls-34966.herokuapp.com/addBook';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server side response'))

    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])

        const imgData = new FormData();
        imgData.set('key', 'ebf4815f3f0d3ab8ceba99796bee723d');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response)
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="inputField">
            <h2>Add Your Book Here</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="dataField d-flex flex-column">
                    <input name="name" placeholder="Book Name" {...register('name')} />
                    <input name="price" placeholder="Price" {...register('price')} />
                    <input name="image" type="file" onChange={handleImageUpload} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </div>
            </form>



        </div>
    );
};

export default AddBook;