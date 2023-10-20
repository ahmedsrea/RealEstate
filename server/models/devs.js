const mongoose = require("mongoose");

const devsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  images: { type: String, required: true },
});

const DevsModule = mongoose.model("devs", devsSchema);
module.exports = DevsModule;
