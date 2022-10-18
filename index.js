//importing express module
const { response } = require("express");
const express = require("express");


//import mongoose
const mongoose=require("mongoose");

//importing the router
const routes=require("./routes/routes")

//initializing express app
const app = express();


//for creating the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});


app.use(express.json())

// //default route("/") with a response of a string
// app.use("/", (req, res) => {
//   res.send("Welcome To Node Application here");
// }
// );


app.use("/user",routes)

// connceting the database with mongoose library
const uri="mongodb+srv://Rahul101:DatabaseRy123@cluster0.1ctcqzj.mongodb.net/employeeNodeJS?retryWrites=true&w=majority"
mongoose.
  connect(uri,{useNewUrlParser:true}).
  then(()=>{console.log("Database connected")}).
  catch((error)=>console.log("error"))