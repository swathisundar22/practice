const Student = require("../Models/Student");


// Add Student

const addStudent = async (req, res) => {

    try {

        const student = new Student({

            name: req.body.name,

            course: req.body.course

        });

        await student.save();

        res.json({

            message: "Student Added Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Get All Students

const getStudents = async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


module.exports = {

    addStudent,

    getStudents

};
