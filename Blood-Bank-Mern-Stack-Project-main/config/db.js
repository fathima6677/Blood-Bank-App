const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config(); // Ensure this line is present to load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
