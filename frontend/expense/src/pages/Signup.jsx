import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { postuserdetails } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Signup() {
  const [loading,setloading]=useState(false)
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")

  const navigate=useNavigate()

  const handlesignup=async (e)=>{
  e.preventDefault();
  if(password!=confirmpassword){
    alert("Passwords do not match")
    return;
  }
  setloading(true)
  const data=await postuserdetails({
    name,
    email,
    password
  });
  setloading(false)
  if(data.message=="user already found"){
    toast.warning("User already found")
  }
  if(data.message=="signup successful"){
    toast.success("Signup successful")

    setTimeout(()=>{ navigate("/login")},1500)
  }
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 flex items-center justify-center px-4">
       <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 border rounded-md bg-gray-400 absolute top-6 left-6 cursor-pointer"
      >
        ← Back
      </button>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Start tracking your expenses today
        </p>

        <form className="space-y-4" onSubmit={handlesignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20"
          value={name} onChange={(e)=>setname(e.target.value)}/>

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20"
           value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition hover:cursor-pointer"
          >
            {loading?"Signing up...":"Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-300 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
