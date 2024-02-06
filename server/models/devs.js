const mongoose = require("mongoose");
const slugify = require("slugify");

const devsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  images: { type: String, required: true },
});

devsSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const DevsModule = mongoose.model("devs", devsSchema);
module.exports = DevsModule;
