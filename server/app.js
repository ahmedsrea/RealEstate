const express = require("express");

const app = express();
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const devRoutes = require("./routes/devRoutes");
const compoundRoutes = require("./routes/compoundRoutes");
const blogRoutes = require("./routes/blogRoutes");
const CompoundsModel = require("./models/compounds");

// Set security HTTP headers
app.use(helmet());

// Limit requests from same IP
const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});
app.use("/api", limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ["min_price", "max_price", "min_area", "max_area"],
  })
);

app.use(cors()); // fuck you
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

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

module.exports = app;
