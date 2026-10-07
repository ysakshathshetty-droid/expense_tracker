const User=require("../models/user")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const  dotenv =require("dotenv")
dotenv.config()

const handlelogin=async (req,res)=>{
       try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
              return res.status(400).json({message:"Invalid Input"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
              return res.status(400).json({message:"Invalid input"})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.json({token,user})
       }catch(err){
            res.status(500).json(err)
       }
}
const handlebudget=async (req,res)=>{
      console.log("received")
      try{
            const {budget}=req.body;
            const user=await User.findByIdAndUpdate(req.user.id,{budget},{new:true})
            res.status(200).json({
                  success:true,
                  budget:user.budget,
            })
      }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
      }

}
const handlegetbudget=async(req,res)=>{
try{
      const user=await User.findById(req.user.id)
      res.status(200).json({budget:user.budget})

}catch(err){
      res.status(500).json({
            message:err.message
      })
}

}

module.exports={handlelogin,handlebudget,handlegetbudget}