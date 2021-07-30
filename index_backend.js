const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I6xrQEFDwnxcCUZqu8jIOL8nWjyhMJEg2yGiYXxzuoe3dKguGildp7ZGhgBuCUB51r9CkbWtz9fZAznf4q8JL6f00o1R15qEo"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    payment_method_types: ["card"],
    amount: total,
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  // console.log(response);
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-frontend-7094b/us-central1/api
