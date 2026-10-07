const {model,Schema}=require("mongoose")
const mongoose=require("mongoose")

const expenseSchema=new Schema({
       title:{
              type:String,
              required:true
       },
       amount:{
              type:Number,
              required:true,
              min:[0,"Amount cannot be neegative"]
       },
       category:{
              type:String,
              required:true
       },
       date:{
         type:Date,
         required:true
       },
       user:{
              type:mongoose.Schema.Types.ObjectId,
              ref:"User",
              required:true
       }
},{timestamps:true})

const Expense=model("expense",expenseSchema)

module.exports=Expense