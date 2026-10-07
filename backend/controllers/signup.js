const User=require("../models/user")
const bcrypt=require("bcryptjs");

const handlesignup=async (req,res)=>{
 try{
   
       const {name,email,password}=req.body;
     
       const userexists=await User.findOne({email});
       if(userexists){
            return  res.status(400).json({message:'user already found'})
       }
      
       const hashedpassword=await bcrypt.hash(password,10);
       const user=await User.create({
              name,
              email,
              password:hashedpassword
       })
       res.status(201).json({message:"signup successful"})
 }catch(err){
   res.status(500).json(err)
 }
}
module.exports={handlesignup}