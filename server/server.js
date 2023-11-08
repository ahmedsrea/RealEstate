const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXECPTION! Shutting down....");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

mongoose
  .connect("mongodb://127.0.0.1:27017/realestate")
  .catch((error) => handleError(error));

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
