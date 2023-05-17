// ============================================= Problem ============================
// Created a Schema for a collection
// Created a model and save it
// found a specific model
// updated a model already in the database
// removed a model already in the database
// The goal of this lab is to add the ability to specify the airport that the flight is originating from;
// and a list (array) of destinations for the flight.
// ================================================= Solution ===========================
// Add dotenv
require("dotenv").config();
// Imports or Dependencies
const express = require("express");
const app = express();
// Mongoose info
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
// Middleware
app.use((req, res, next) => {
  console.log("Middleware running....");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
// Data
const Flight = require("./models/flight");
// Routes...
// Index ----------- GET -------- /things
// New ------------- GET -------- /things/new
// DELETE ---------- Destroy ---- /things/:id
// Update ---------- PUT -------- /things/:id
// Create ---------- POST ------- /things	 
// Edit------------- GET -------- /things/:id/edit
// Show ------------ GET -------- /things/:id

// Listen
app.listen(process.env.PORT, () => {
    console.log(`Port: ${process.env.PORT}`);
  });
