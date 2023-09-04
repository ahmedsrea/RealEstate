const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const blogSchema = new mongoose.Schema({
  blog_title: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
  },
  del_date: {
    type: Number,
  },
  dev_by: {
    type: String,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
  },
  images: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
  sanitizedHtml: {
    type: String,
  },
});

blogSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked.parse(this.markdown));
  }
  next();
});

module.exports = mongoose.model("Blogs", blogSchema);
