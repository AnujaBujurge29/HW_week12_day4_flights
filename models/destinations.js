// imports
const mongoose = require("mongoose");
// configuration
const Schema = mongoose.Schema;
const model = mongoose.model;

// create a new Schema
const destinationSchema = new Schema({
  arrival: { type: Date, default: Date()},
  airport: { type: String, enum: ["AUS", "DAL", "LAX", "SAN", "SEA"] },
});
const Destination = model("destinations", destinationSchema);

module.exports = Destination;
