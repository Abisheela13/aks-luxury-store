const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  name: String,

  price: Number,

  image: String,

  category: String,

  reviews: [
    {
      user: String,
      comment: String,
      rating: Number
    }
  ]

});

module.exports = mongoose.model(
  "Product",
  productSchema
);