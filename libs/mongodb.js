
import mongoose from "mongoose";


const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL)
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB;