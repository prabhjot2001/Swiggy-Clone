import mongoose from "mongoose"

const connectDB = async (mongodb_uri)=>{
    try{
        await mongoose.connect(mongodb_uri);
        console.log("Database is connected sucessfully")
    }catch(error){
        console.log(`Something went wrong! Can't connect to the database. Error: ${error}`);
    }
}

export default connectDB;