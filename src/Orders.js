import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import "./Order";
import Order from "./Order";
import "./orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((obj) => ({
              id: obj.id,
              data: obj.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <div className="orders__title">
        <h2>Your Orders</h2>
      </div>

      <div className="orders__summary">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
