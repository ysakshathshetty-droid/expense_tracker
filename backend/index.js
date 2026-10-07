const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()

const expenserouter=require("./routes/expense")

const mongoose=require("mongoose")
const cors=require("cors")
const PORT=process.env.PORT
const mongodb_url=process.env.mongodb_url


mongoose.connect(mongodb_url).then(()=>console.log("mongodb connected"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/api",expenserouter)


app.listen(PORT,()=>console.log(`server connected to the PORT:${PORT}`))