import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg"
          alt=""
        />

        <div>
          <p>{user ? "Hello, " + user.email : ""}</p>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((ele) => (
            <CheckoutProduct
              id={ele.id}
              title={ele.title}
              price={ele.price}
              rating={ele.rating}
              image={ele.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
