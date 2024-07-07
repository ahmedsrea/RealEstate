require("dotenv").config();
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXECPTION! Shutting down....");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

mongoose.connect(process.env.MongoDB_URI).catch((error) => console.log(error));

const port = process.env.API_PORT || 3000;
if (process.env.API_PORT) {
  const server = app.listen(port, () => {
    console.log("Server running on port", process.env.API_PORT);
  });
}

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down....");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
