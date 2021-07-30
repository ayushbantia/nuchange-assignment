import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import { getSubtotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./order.css";

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <div className="order__title">
        <h2>Order Summary</h2>
      </div>
      <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {console.log(order)}
      {order.data.basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
      <div className="order__total">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Bill Amount :<strong> {value} </strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order;
