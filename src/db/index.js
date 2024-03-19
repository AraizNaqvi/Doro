import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        // console.log(`Connected at: ${connectionInstance.connect.host}`);
        console.log(`Connected at: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log(`Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;