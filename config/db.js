import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async()=>{
    try{
        const connection = await mongoose.connect("mongodb://rupeshgirase006_db_user:RwLx9to43VbmdSKX@ac-bjtqsip-shard-00-00.sxld9h7.mongodb.net:27017,ac-bjtqsip-shard-00-01.sxld9h7.mongodb.net:27017,ac-bjtqsip-shard-00-02.sxld9h7.mongodb.net:27017/cold-mailer?ssl=true&replicaSet=atlas-m78mfg-shard-0&authSource=admin")
        console.log("Mongodb Connected")
    }
    catch(e){
        console.log(e.message)
    }
}
export default connectDB