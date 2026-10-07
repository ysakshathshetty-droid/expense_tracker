const express=require("express")
const router=express.Router()
const {handleexpense,getexpenses,handleupdate,handledelete,}=require("../controllers/expense")
const {handlelogin,handlebudget,handlegetbudget}=require("../controllers/login")
const {handlesignup}=require("../controllers/signup")
const verifytoken=require("../middlewares/auth")

router.post("/expense",verifytoken,handleexpense)
router.get("/expense",verifytoken,getexpenses)
router.patch("/update/:id",verifytoken,handleupdate)
router.delete("/remove",verifytoken,handledelete)
router.put("/budget",verifytoken,handlebudget)
router.post("/signup",handlesignup)
router.post("/login",handlelogin)
router.get("/budget",verifytoken,handlegetbudget)

module.exports=router