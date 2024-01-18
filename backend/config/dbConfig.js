require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(url),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
  } catch (error) {
    return error;
  }
};

module.exports = connectDB;
