const express = require("express");
const app = express();
// const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const CompoundsModel = require("./models/compounds");
const blogsRouter = require("./routes/blogs");

app.use(cors()); // fuck you
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/assests/images");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now();
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

app.get("/get-property", (req, res) => {
  const { proj_type, location, budget } = req.query;

  CompoundsModel.find({ proj_type: "property" })
    .then((comps) => res.json(comps))
    .catch((err) => res.json(err));
});

app.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const data = await CompoundsModel.findOne({ slug });
    if (!data) {
      return res.status(404).json({ error: "There is no data" });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
  }
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
    desc: req.body.desc,
    amenities: req.body.amenities,
    images: path,
  };
  try {
    await CompoundsModel.create(obj);
    console.log(res.json({ status: "ok" }));
  } catch (error) {
    res.json({ status: error });
  }
});

app.use("/blogs", blogsRouter);

app.listen(3000);
