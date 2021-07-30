import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, stock }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title" >{title}</p>
        <p className="product__price">
          {/* <small>&#8377;</small> */}
          <small>&#8377;</small>
          <strong>{price}</strong> / kg
        </p>
      <div className="product__fresh">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/ALMStores/UFG/ctnow/Logos/fresh_stacked_color.png" />  
        <span className="product__availability">{stock ? "Available in-stock" : "Out of stock"}</span>
      </div>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
