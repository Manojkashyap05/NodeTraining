const mongoose = require("mongoose");
const express = require("express");

require("dotenv").config();

async function main() {
  console.log("Connecting to MongoDb");
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
  const app = express();

  app.use(express.json());
  app.use("/api/products", require("./CRUD/products.routes"));
  app.listen(3000, () => console.log("Server Started"));
}
main();
