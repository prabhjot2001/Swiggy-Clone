import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database is connected sucessfully")
    }catch(error){
        console.log(`Something went wrong! Can't connect to the database. Error: ${error}`);
    }
}

export default connectDB;