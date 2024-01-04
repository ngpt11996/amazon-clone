import React from 'react'
import './../css/Product.css'
import {useStateValue} from './StateProvider';

//destructring to get Props
function Product({id,title,image,price,rating}) {
    // state and dispatch
    const [{basket},dispatch]= useStateValue();
    // console.log(basket);
    //the above state has been destructured to get the basket
    const addToBasket=()=>{
        //triggering the action
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image:image,
                price:price,
                rating:rating 
            }
        })
    };
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_,i)=>(
                    <p key={i}>&#11088;</p>          
                ))}
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
