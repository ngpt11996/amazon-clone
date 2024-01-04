import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import './../css/Payment.css'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from './Reducer';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from "react-router-dom"
import axios from './Axios';
import { db } from '../firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const getClientSecret = async () => {
        try{
            const response = await axios({
                method: 'post',
                //stripe expects total in a currencies subunits (*100->to convert dollar to subunit)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            console.log(response);
            setClientSecret(response.data.clientSecret);
        }catch(err){
            console.log(err);
        }
    };

    // whenever basket changes we need to change client secret as amount of apyment changes
    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        if(basket.length!==0){
            getClientSecret();
        }
    }, [basket])
    console.log('THE SECRET IS >>>', clientSecret);

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent=paymentConfirmation
            console.log(user);
            db.collection('users').doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
             .set({
                basket:basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            navigate('/orders', { replace: true });
        })
    }

    const handleChange = (event) => {
        //Listen for Changes inside the Card Element
        // and display an error as customer type their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return(
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(<Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={
                                        (value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                    decimalScale={2}
                                    //value={0}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
