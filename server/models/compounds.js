const mongoose = require("mongoose");
const slugify = require("slugify");

const compoundsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  delivery_date: {
    type: Number,
    required: true,
  },
  dev_by: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  proj_type: {
    type: String,
    required: true,
  },
  proj_name: {
    type: String,
    required: true,
  },
  unite_type: {
    type: String,
    required: true,
  },
  unite_space: {
    type: String,
    required: true,
  },
  unite_size: {
    type: Number,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  furnishing: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  amenities: {
    type: String,
  },
  images: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
});

compoundsSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const CompoundsModel = mongoose.model("compounds", compoundsSchema);
module.exports = CompoundsModel;
