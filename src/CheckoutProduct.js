import React, { useContext } from "react";
import "./CheckoutProduct.css";
import { StateContext } from "./Context";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useContext(StateContext);
  var x = price;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{res}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐️
              </span>
            ))}
        </p>
        <button onClick={removeItem}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
