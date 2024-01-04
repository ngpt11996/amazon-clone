import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './../css/Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import {useNavigate} from "react-router-dom"

function Subtotal() {
    const [{basket,user},dispatch]= useStateValue();
    const navigate = useNavigate();
    
    return (
    <div className="subtotal">
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                   Subtotal ({basket.length} items): <strong>{}</strong>
                    <strong>{` ${value} `}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        //value={0}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
    />
    <button onClick={e=>{
        if(user) navigate('/payment');
        else navigate('/login');
        }}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
