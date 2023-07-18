const mongoose = require('mongoose');
const dbConnect = async () =>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Db connected successfully");
    } catch (error) {
        console.log("DB connection failed ", error.message);
    }
}


