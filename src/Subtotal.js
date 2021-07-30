import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getSubtotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user, json }, dispatch] = useStateValue();
  // const [quantity, setQuantity] = useState([0, 0, 0, 0]);
  var quantity = {1:0, 2:0, 3:0, 4:0 }
  const handleCheckout = (e) => {


    basket.map((ele) => {
      const eleId = ele.id
      quantity[eleId] += 1
    })

    dispatch({
      type: "ADD_QUANTITY",
      quantity: quantity,
    })

    alert("UPDATED JSON:", json)
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
      <button onClick={handleCheckout}>Update JSON</button>
    </div>
  );
}

export default Subtotal;
