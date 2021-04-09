import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Admin.css'
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="navLogo">
                    <h2>Amar E-Boi</h2>
                    
                </div>
                <div className="navBar d-flex flex-column bd-highlight mb-3">
                    <Link to="/home"><button className="loginBtn btn btn-info">Home</button></Link>
                    <Link to="/addBook"><button className="loginBtn btn btn-info">Add Products</button></Link>
                    <Link to="/bookList"><button className="loginBtn btn btn-info">List & Remove Items</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Admin;