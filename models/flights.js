// imports
const mongoose = require("mongoose");
// configuration
const Schema = mongoose.Schema;
const model = mongoose.model;
const destinationSchema = require("./destinations");

// create a new Schema
const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: { type: Date, default: Date() },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
  },
  // desinations: [{ destinationSchema }],
});

const Flight = model("flights", flightSchema);

module.exports = Flight;
