import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getSubtotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const handleCheckout = (e) => {
    if (user) {
      history.push("/payment");
    } else {
      alert("Please Sign In before proceeding to checkout.");
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
