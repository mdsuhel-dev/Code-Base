import config from "./config.js";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

let isConnected = false;

async function connectDB() {
  

  try {
    const db = await mongoose.connect(config.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
}

export default connectDB;