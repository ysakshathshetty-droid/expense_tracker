import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { loginuser } from '../api/auth'
import {ExpenseContext} from '../context/ExpenseContext'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

export default function Login() {
  const {fetchexpenses}=useContext(ExpenseContext)
 const [email,setemail]=useState("")
 const [password,setpassword]=useState("")
 const navigate=useNavigate()

 const handlelogin=async (e)=>{
e.preventDefault()
if(!email || !password){
  toast.warning("Please fill all fields!")
  return;
}
const data=await loginuser({
  email,
  password
})
if(data.message){
  toast.error("Either Email or Password is wrong")
}
if(data.token){
  localStorage.setItem("token",data.token)
  localStorage.setItem("username",data.user.name)
  localStorage.setItem("email",data.user.email)
  await fetchexpenses()
  toast.success("Login successful!")
  navigate("/mainpage") 
}

}

  return (
    <>
     <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 flex items-center justify-center px-4">
       <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 border rounded-md bg-gray-400 absolute top-6 left-6 cursor-pointer"
      >
        ← Back
      </button>
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Login to manage your expenses
        </p>

        <form className="space-y-4" onSubmit={handlelogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20"
          value={email} onChange={(e)=>setemail(e.target.value)}/>

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20"
           value={password} onChange={(e)=>setpassword(e.target.value)}/>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-300 mt-5">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-cyan-400 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}
