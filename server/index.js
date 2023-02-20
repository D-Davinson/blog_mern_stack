//express
const express = require("express");
const app = express();

//dotenv
require("dotenv").config({path:"./config/.env"});

//connection db
require("./config/database").connectToMongoDB();

//routes
const postRoutes = require("./routes/post.routes.js");
app.use("/",postRoutes)

//server
app.listen(process.env.PORT,() => {
    console.log("Server listening on port" + process.env.PORT);
})