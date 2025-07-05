import mongoose from "mongoose";
import { boolean } from "zod/v4";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("The Database is Already Connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "" , {});
    console.log("The Database is Connected");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("The databse connectiion failed", error);
    process.exit(1);
  }
}
export default dbConnect;
