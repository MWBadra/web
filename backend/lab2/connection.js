require('dotenv').config();
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://username:password@egyptiancolumbianbank.nxnclud.mongodb.net/?appName=EgyptianColumbianBank";
    
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Connection error:", err);
    process.exit(1); 
  }
};

module.exports = connectDB;
