const express = require("express");

const router = express.Router();

const {

    addStudent,

    getStudents

} = require("../Controller/studentController");


// Add Student

router.post("/student", addStudent);


// Display Students

router.get("/student", getStudents);


module.exports = router;
