import React, { useContext } from "react";
import "./Product.css";
import { StateContext } from "./Context";
import { toast } from "react-toastify";
function Product({ id, title, price, image, rating }) {
  var x = price;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  const [, dispatch] = useContext(StateContext);
  const addItem = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
    toast.info("Item Added To Basket 🚀", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{res}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐️
              </span>
            ))}
        </p>
      </div>
      <img src={image} alt={title} />
      <button onClick={addItem}>Add to basket</button>
    </div>
  );
}

export default Product;
