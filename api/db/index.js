const { connect } = require("mongoose");

const { MONGO_URI } = process.env

console.log(MONGO_URI);

const connection = async () => {
    try {
      await connect(MONGO_URI);
      console.log("Database is connected");
    } catch (error) {
      console.log(error);
    }
}

connection()


