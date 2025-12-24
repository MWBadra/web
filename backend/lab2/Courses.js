const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const CourseSchema = new mongoose.Schema({

  _id: { type: String, default: uuidv4 },

    Title :{type: String},
    Description :{type: String},
    instructorName : {type:String},
    Price :{type: Number},
    Category :{type: String},
    numOfStudents : {type:Number}

}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);