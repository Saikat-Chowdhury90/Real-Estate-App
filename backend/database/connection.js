import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const CONNECTION_URL = 'mongodb+srv://rawift:3Hj8m3wB6LgGVodD@cluster0.fb6lpvj.mongodb.net/?retryWrites=true&w=majority'

export const connect = async () => {
  const db = mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true})
  return db
}