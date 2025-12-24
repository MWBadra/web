const express = require('express');
const router = express.Router();
const Course=require("./models/Courses")

router.get('/',async (req,res)=>{
    const {id} = req.params
    try{
    let course = await Course.find({})

    res.json(course)
}
catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get('/:id',async (req,res)=>{
    const {id} = req.params
    try{
    let course = await Course.aggregate([
        {$match:{_id:id}}
      
    ]);

    res.json(course)
}
catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});




module.exports = router;