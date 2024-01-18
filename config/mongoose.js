// importing mongoose
const mongoose = require('mongoose');

// getting database url from env variables
const MONGODB_URL = process.env.MONGODB_URL;

// connect to database
exports.connect = async () => {
    try {
       const conn = await mongoose.connect(MONGODB_URL);
       console.log(`MongoDB Connection Established \n`);
    } catch (error) {
       console.log(error);
       process.exit(1);
    }
 };