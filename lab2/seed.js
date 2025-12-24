require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./connection"); 

const Courses = require('./models/Courses');


const seedData = async () => {
  try {
    await connectDB();
    
    const Course = await Courses.insertMany([
      {
        Title :"Web",
        Description :"react/mongo",
        instructorName : "Mohamed Tharwat",
        Price :2000,
        Category :"computer",
        numOfStudents:2
      },
      {
        itle :"Drama",
        Description :"Drama/acting",
        instructorName : "Ibrahim Saafan",
        Price :12,
        Category :"ART",
        numOfStudents:15
      }
    ]);
    
    process.exit(0);

  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedData();