//express
const express = require("express");
const app = express();

//cors
const cors = require("cors");
const corsOptions= {
    origin:["http://localhost:5173"], // for the front by viteJs
    credentials: true,
    allowedHeaders:["sessionId","Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue : false,
};

app.use(cors(corsOptions));

//dotenv
require("dotenv").config({path:"./config/.env"});

//connection db
require("./config/database").connectToMongoDB();


// json parsing
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//routes
const postRoutes = require("./routes/post.routes.js");
app.use("/",postRoutes)





//server
app.listen(process.env.PORT,() => {
    console.log("Server listening on port " + process.env.PORT);
})