const express=require("express");
const app=express();
const cors=require("cors");

const authrouter=require("./routes/auth.routes");
const userrouter=require("./routes/user.routes");
//const {allowAccess} =require("../middleware/security.middleware");
// /auth/login
// /auth/signup
app.use(express.json());

app.use(cors());



app.use("/auth",authrouter);  // publicly available

//app.use(allowAccess)

app.use("/user",userrouter)  // only available after the logging in 


module.exports=app;