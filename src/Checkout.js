import React, { useContext } from "react";
import "./Checkout.css";
import { StateContext } from "./Context";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket }] = useContext(StateContext);
  return (
    <div className="checkout">
      <div className="checkout__prodcucts">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/Offerpage_1500x3001.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <h1>Your Shopping Basket is Empty</h1>
        ) : (
          <div>
            <h1 className="checkout__title">Your Basket</h1>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__subtotal">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
