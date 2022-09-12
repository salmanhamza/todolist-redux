import mongoose from "mongoose";

const URL = `mongodb+srv://salman:database@cluster0.sh03wis.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL, () => {
  console.log("database is connected");
});
