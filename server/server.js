const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const CompoundsModel = require("./models/compounds");
const blogRoutes = require("./routes/blogRoutes");
const compoundRoutes = require("./routes/compoundRoutes");
const devRoutes = require("./routes/devRoutes");

app.use(cors()); // fuck you
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/realestate")
  .catch((error) => hanleError(error));

app.get("/get-property", (req, res) => {
  CompoundsModel.find({ proj_type: "property" })
    .then((comps) => res.json(comps))
    .catch((err) => res.json(err));
});

// Routes
app.use("/api/v1/compounds", compoundRoutes);
app.use("/api/v1/developers", devRoutes);
app.use("/api/v1/blogs", blogRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
