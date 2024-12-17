import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@crud-app.nia2b.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to database:", error);
  }
};

export default Connection;
