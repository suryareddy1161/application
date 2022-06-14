const User=require("../models/User")
const{ passwordCompare , jwtGen }=require("../utils/utils")
const signUp=(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
  
    })
  
    user.save().then(data=>{
        res.json({
            message:"Successfully registered"
        })
    }).catch(err=>{
        
      res.json({
          message:err.message
      })
  
    })
  
  }

const login=(req,res)=>{

    User.findOne({email:req.body.email}).then(result=>{
      //  console.log("db password",result.password.toString())
       // console.log("user password",req.body.password.toString()==result.password.toString())

        // We have to compare the passwords too
        passwordCompare(result.password,req.body.password).then(data=>{
            if(data){
                // PAssowrd matched successfully
                jwtGen({username:result.email}).then(token=>{

                    res.json({
                        message:"Login success",
                        token:token
                    })

                })

             
            }
            else(err=>{
                console.log(err)
            })
                

               /*  res.json({
                    message:"Login Failed,Passwords donot match"
                }) */

        })


    }).catch(err=>{
        res.json({
            message:"No user Found !!"
        })
    })

   
  
  }
module.exports={
    signUp,
    login
}