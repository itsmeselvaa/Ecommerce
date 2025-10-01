const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const createDateBase = async () => {
  try {
    const database = await mongoose.connect(process.env.MONGO_URL);

    if (database) {
      console.log("Database connected Successfully");
    }
  } catch (error) {
    console.log("Failed to connect Database", error);
  }
};

module.exports = createDateBase;
