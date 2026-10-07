const Expense=require("../models/expense")

async function handleexpense(req,res) {
       try{
       const body=req.body
       console.log(req.user)
       console.log(req.user?._id)
       const expense=await Expense.create({
              title:body.title,
              amount:body.amount,
              category:body.category,
              date:body.date,
              user:req.user._id
       })
       console.log(expense)
     return res.status(200).json(expense)       
}catch(err){
       console.log(err)
       return res.status(500).json({error:"Internal server error"})
}
}

async function getexpenses(req,res){
       try{
       const allexpenses=await Expense.find({user:req.user._id}).sort({date:-1})
       if(allexpenses.length===0) return res.status(200).json([])
        return res.status(200).json(allexpenses)   
}catch(err){
       console.log(err)
       return res.status(500).json({error:"Internal server error"})
}   
}

async function handleupdate(req,res) {
try{
       const id=req.params.id
       const body=req.body
       const updated=await Expense.findByIdAndUpdate({_id:id,user:req.user._id},{
              title:body.title,
              amount:body.amount,
              category:body.category,
              date:body.date,
              user:req.user._id
       },{new:true}
       )
       if(!updated) return res.status(400).json({error:"unable to update"})
       return res.status(200).json(updated)
}catch(err){
       console.log(err)
       return res.status(500).json({error:"Internal server error"})
}
}

async function handledelete(req,res){
       try{
       const id=req.body.id
       const remove=await Expense.findByIdAndDelete({_id:id,user:req.user._id})
       if(!remove) return res.status(400).json({error:"unable delete"})
       return res.status(200).json({status:"success"})
       }catch(err){
       console.log(err)
       return res.status(500).json({error:"Internal server error"})
}
}
module.exports={
       handleexpense,
       getexpenses,
       handleupdate,
       handledelete
}