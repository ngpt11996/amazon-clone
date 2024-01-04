import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe('pk_test_51NnYRiSJ5o2vvo8FF69xfKmoRj7ksVm45NWyNursoiaau62wxongcyBe5kjZV7VHf0xPkwGykG8DMIBidUqGM7yI00cfmi5mgJ');
function App() {

  const [{ }, dispatch] = useStateValue();

  //Listener to keep a track of who has signed in
  useEffect(() => {
    //will run only once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        //the user just logged in / the user is logged in and he reloads
        dispatch({
          type: 'SET_USER',
          user: authUser //user from firebase
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
            </>} />
            <Route exact path="/orders" element={<>
              <Header />
              <Orders />
            </>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/checkout" element={
            <>
              <Header />
              <Checkout /> </>} />
          <Route exact path="/payment" element={
            <>
              <Header />
              {/* Higher Order Function */}
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
