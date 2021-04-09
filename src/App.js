import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddBook from './components/AddBook/AddBook';
import BookList from './components/BookList/BookList';
import Admin from './components/Admin/Admin';



export const DataContext = createContext();
export const UserContext = createContext();
export const CheckoutContext = createContext();
export const BookContext = createContext();

function App() {

  const [order, setOrder] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [books, setBooks] = useState([])
  const [checkout, setCheckout] = useState([])

  useEffect(() => {
    fetch('https://obscure-falls-34966.herokuapp.com/books')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])


  return (
    <DataContext.Provider value={[order, setOrder]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <CheckoutContext.Provider value={[checkout, setCheckout]}>
          <BookContext.Provider value={[books, setBooks]}>
            <Router>
              <div>
                <div className="App">
                  <Switch>
                    <Route path="/home">
                      <Header />
                      <div className="dataCard">
                        {
                          books.map(data => <Home data={data} />)
                        }
                      </div>
                    </Route>
                    <Route exact path="/">
                      <Header />
                      <div className="dataCard">
                        {
                          books.map(data => <Home data={data} />)
                        }
                      </div>
                    </Route>
                    <PrivateRoute path="/checkout">
                      <Header />
                      <Checkout />
                    </PrivateRoute>
                    <Route path="/login">
                      <Header /><Login />
                    </Route>
                    <PrivateRoute path="/orders">
                      <Header /><div className="dataLine"><Orders /></div>
                    </PrivateRoute>

                    <PrivateRoute path="/addBook">
                      <div className="d-flex justify-content-around">
                        <Admin />
                        <div className="bookItem">
                          <AddBook />
                        </div>
                      </div>
                    </PrivateRoute>
                    <PrivateRoute path="/bookList">
                      <div className="d-flex justify-content-around">
                        <Admin />
                        <div className="bookItem d-flex flex-column bd-highlight mb-3">
                          {
                            books.map(data => <BookList data={data} />)
                          }
                        </div>
                      </div>
                    </PrivateRoute>
                  </Switch>
                </div>
              </div>
            </Router>
          </BookContext.Provider>
        </CheckoutContext.Provider>
      </UserContext.Provider>
    </DataContext.Provider>
  );
}

export default App;