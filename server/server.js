const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const CompoundsModel = require("./models/compounds");
const blogRoutes = require("./routes/blogRoutes");
const compoundRoutes = require("./routes/compoundRoutes");
const devRoutes = require("./routes/devRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

app.use(cors()); // fuck you
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXECPTION! Shutting down....");
  console.log(err.name, err.message);
  process.exit(1);
});

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

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Server running on port 3000");
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down....");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
