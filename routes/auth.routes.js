

const express=require("express");
const authrouter=express.Router();
const {signUp, login}=require("../controllers/auth.controller");
const {encryptPassword} =require("../middleware/auth.middleware");

authrouter.post("/healthecheck",(req,res)=>{
    res.send("sucessFullyworking")
});

authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/login",login);


module.exports=authrouter;