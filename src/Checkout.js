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
          <div>
            <h1 className="checkout_title">Your Shopping Basket is Empty</h1>
            <img
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
              alt="empty"
            />
          </div>
        ) : (
          <div>
            <h1 className="checkout_title">Your Basket</h1>
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            <div className="checkout__image">
              <img
                src="https://m.media-amazon.com/images/G/31/img16/GiftCards/CorpGC2020/PC_Dashboard_770x150._CB428054695_.jpg"
                alt="gift"
              />
              <img
                src="https://m.media-amazon.com/images/G/31/img16/GiftCards/WeddingStore/Retail_GC_770x150_01._CB447560580_.jpg"
                alt="gift"
              />
            </div>
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
