import app from './app.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

connectDB()
    .then(() => {
        app.listen((process.env.PORT || 8000), () => {
            console.log(`Connected at port: ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(`Error in src>index.js while listening on PORT: ${error}`);
    })