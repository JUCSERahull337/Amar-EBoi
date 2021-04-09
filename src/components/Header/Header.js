import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="navDiv d-flex justify-content-between p-3">
        
            <div className="navLogo">
                <h2>Amar E-Boi</h2>
                
            </div>
            <div className="d-flex flex-row bd-highlight mb-3 navLink">
                <Link to="/home"><button className="loginBtn btn btn-outline-dark">Home</button></Link>
                <Link to="/addBook"><button className="loginBtn btn btn-outline-dark">Admin</button></Link>
                <Link to="/orders"><button className="loginBtn btn btn-outline-dark">Orders</button></Link>
                {/* <Link to="/login"><button className="loginBtn btn btn-outline-dark">Login</button></Link> */}


                { loggedInUser.email ? <button className="loginBtn btn btn-info">{loggedInUser.name}</button> : <Link to="/login"><button className="loginBtn btn btn-warning">Login</button></Link>}
            </div>
           
            
        </div>
    );
};

export default Header;