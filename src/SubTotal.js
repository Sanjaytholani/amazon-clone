import React, { useContext } from "react";
import "./SubTotal.css";
import { StateContext } from "./Context";
import { useHistory } from "react-router-dom";
function SubTotal() {
  const history = useHistory();
  const [{ basket }] = useContext(StateContext);
  const total = basket.reduce((amount, item) => item.price + amount, 0);
  var x = total;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items):<small>₹</small>
        <strong>{res}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={(e) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
}

export default SubTotal;
