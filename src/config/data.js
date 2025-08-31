import mongoose from 'mongoose';

export const connectDB= async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");      
   }
    catch(err){
       console.log("error connecting to DB", err);
       process.exit(1);
    }
}