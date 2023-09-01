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

router.get("/", (req, res) => {
  Blogs.find()
    .then((blog) => res.json(blog))
    .catch((err) => res.json(err));
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
    title: req.body.title,
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
