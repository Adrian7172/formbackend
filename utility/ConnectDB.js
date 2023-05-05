const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function ConnectDB() {
  const uri = process.env.MONGO_URL;
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
  }
}
module.exports = ConnectDB;
