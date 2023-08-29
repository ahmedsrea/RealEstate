const mongoose = require("mongoose");

const compoundsSchema = new mongoose.Schema({
  title: String,
  status: String,
  delivery_date: Number,
  dev_by: String,
  price: Number,
  proj_type: String,
  proj_name: String,
  unite_type: String,
  unite_space: String,
  neighborhood: String,
  bedrooms: Number,
  bathrooms: Number,
  furnishing: String,
  features: String,
  pay: String,
  images: String,
});

const CompoundsModel = mongoose.model("compounds", compoundsSchema);
module.exports = CompoundsModel;
