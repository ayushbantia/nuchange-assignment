import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./payment.css";
import { getSubtotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeded, setSucceded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${Math.round(getSubtotal(basket) * 100)}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log("Client Secret >>> ", clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret is ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log("Database from Payment >>>", db);
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
          basket: basket,
        });

        history.replace("/orders");
      });
  };

  //
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  //

  return (
    <div className="payment">
      <h1>
        Checkout (<Link to="/checkout">{basket.length} items</Link>)
      </h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user.email}</p>
            <p>No. 1709, MC Layout</p>
            <p>Vijayanagar</p>
            <p>Bangalore, Karnataka - 560040.</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Items</h3>
          </div>{" "}
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Details</h3>
          </div>{" "}
          <div className="payment__method">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <React.Fragment>
                      <h3>Bill Total : {value} </h3>
                    </React.Fragment>
                  )}
                  decimalScale={2}
                  value={getSubtotal(basket)}
                  prefix={"$"}
                  displayType={"text"}
                  thousandsSeperator={true}
                />
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
