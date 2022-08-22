import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

// console.log(process.env.MONGO_DB);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

export default mongoose;
