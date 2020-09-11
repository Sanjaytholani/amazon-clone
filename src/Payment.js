import React, { useEffect } from "react";
import "./Payment.css";
import { useContext } from "react";
import { StateContext } from "./Context";
import FlipMove from "react-flip-move";
import CheckoutProduct from "./CheckoutProduct";
import { ToastContainer } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "./axios";
import { db } from "./firebase";
function Payment() {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const [{ basket, user }, dispatch] = useContext(StateContext);

  ///Total
  const total = basket.reduce((amount, item) => item.price + amount, 0);
  var x = total;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  ///

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("Secret is >>>>", clientSecret);

  const handelSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setProcessing(false);
        setError(null);
        history.replace("/orders");
        dispatch({
          type: "EMPTY_BASKET",
        });
      });
  };
  const handelChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <ToastContainer />
      <div className="payment__container">
        <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Chennai</p>
            <p>Tamil Nadu</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Basket</h3>
          </div>
          <div className="payment__items">
            <FlipMove
              staggerDelayBy={150}
              appearAnimation="accordionVertical"
              enterAnimation="fade"
              leaveAnimation="accordionVertical"
              typeName={null}
            >
              {basket.map((item, i) => (
                <CheckoutProduct
                  key={item.id}
                  {...basket}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic */}
            <form onSubmit={handelSubmit}>
              <CardElement onChange={handelChange} />
              <div className="payment__priceContainer">
                <h3>Order Total: ₹{res}</h3>
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && (
                <div className="card-error" role="alert">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
