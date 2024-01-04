import React from 'react'
import'./../css/Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket,user},dispatch]= useStateValue();
    console.log(basket);
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Home/bau/Decor/XCM_Manual_1500x300_1202741_1202741_IN_Home_Decor_Non_GW_BAU_1575984235_jpg._CB427170763_.jpg" alt="" className="checkout__ad" />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your shopping Basket</h2>
            </div>
            {basket.map((item,id)=>(
                <CheckoutProduct
                    key={id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}
                />
            ))}
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout

// Hello.

// img { width: 100%; } means:
// scale the image horizontally to fit the containing element, e.g. a div, irrespective of its actual pixel size.

// img { max-width: 100%; } means:
// scale the image horizontally, but never let the image get bigger than its actual pixel size.

// In the case of width: 100%, the original aspect ratio of the image will be maintained and height:auto is not required. (If you include it by mistake it won’t affect anything.)

// In the case of max-width: 100%, height: auto is required to maintain the image’s aspect ratio. If you don’t include this rule you will find that as soon as the screen gets smaller than the actual pixel width of the image it will continue to scale (shrink) horizontally but remain at its actual pixel height.