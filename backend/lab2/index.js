const express = require("express");

const connectDB = require("./connection"); 

const userRoutes = require('./routers');

connectDB();

const app = express();
app.use(express.json());




app.use('/Courses', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));