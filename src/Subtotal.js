import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getSubtotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./subtotal.css";


function Subtotal() {
  const history = useHistory();
  const [{ basket, json }, dispatch] = useStateValue();
  const [showUpdatedJson, setShowUpdatedJson] = useState(false)
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

    setShowUpdatedJson(true)
    console.log(json)
    history.push("/data")
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
        prefix="&#8377;"
      />
      <button onClick={handleCheckout}>Update JSON</button>

      
      {showUpdatedJson ?
        json : <></>}
    </div>
  );
}

export default Subtotal;
