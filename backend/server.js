const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./Routes/studentRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// MongoDB Connection

mongoose.connect("mongodb://127.0.0.1:27017/phase2db")
 
.then(() => {

    console.log("MongoDB Connected Successfully");

})

.catch((error) => {

    console.log(error);

});


// Routes

app.use("/api", studentRoutes);


// Server

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});
