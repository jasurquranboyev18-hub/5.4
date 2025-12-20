const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to DB"))
      .catch((erorr) => console.log(erorr));
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = connectDB;
