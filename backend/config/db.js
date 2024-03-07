const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.bold.underline
    );
  } catch (error) {
    console.error(` this is the Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
