const express = require("express");
const Blogs = require("../models/blogs");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/assests/images/blog");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  await Blogs.find()
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
});

router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const data = await Blogs.findOne({ slug });
    if (!data) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", upload.array("images[]"), async (req, res) => {
  let path = "";
  if (req.files) {
    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));
  }
  let blog = {
    blog_title: req.body.blog_title,
    title: req.body.title,
    price: req.body.price,
    status: req.body.status,
    del_date: req.body.del_date,
    dev_by: req.body.dev_by,
    description: req.body.description,
    markdown: req.body.markdown,
    images: path,
  };
  try {
    await Blogs.create(blog);
    console.log(res.json({ status: "ok" }));
  } catch (error) {
    res.json({ status: error });
  }
});

module.exports = router;
