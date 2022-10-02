import mongoose from 'mongoose'
import dotenv from 'dotenv'


const connectDB = async () => {
  dotenv.config()

  const dbUri = process.env.dbURI || ""
  console.log(`⚡️[server]: Connecting to DB...`)
  try {
    await mongoose.connect(dbUri)
  } catch (error) {
    console.log('⚡️[server]: Could not connect to db')
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
