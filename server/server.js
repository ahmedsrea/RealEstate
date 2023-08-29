const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const CompoundsModel = require("./compounds");
const app = express();

app.use(cors()); // fuck you
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/assests/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    // cb(null, uniqueSuffix + "_" + file.originalname);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

mongoose
  .connect("mongodb://127.0.0.1:27017/realestate")
  .catch((error) => hanleError(error));

app.get("/get-compounds", (req, res) => {
  CompoundsModel.find()
    .then((comps) => res.json(comps))
    .catch((err) => res.json(err));
});

app.post("/item-request", upload.array("images[]"), async (req, res, next) => {
  let path = "";
  if (req.files) {
    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));
  }
  let obj = {
    title: req.body.title,
    status: req.body.status,
    delivery_date: req.body.delivery_date,
    dev_by: req.body.dev_by,
    price: req.body.price,
    proj_type: req.body.proj_type,
    proj_name: req.body.proj_name,
    unite_type: req.body.unite_type,
    unite_space: req.body.unite_space,
    neighborhood: req.body.neighborhood,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    furnishing: req.body.furnishing,
    features: req.body.features,
    pay: req.body.pay,
    images: path,
  };
  try {
    await CompoundsModel.create(obj);
    console.log(res.json({ status: "ok" }));
  } catch (error) {
    res.json({ status: error });
  }
});

app.listen(3000);
