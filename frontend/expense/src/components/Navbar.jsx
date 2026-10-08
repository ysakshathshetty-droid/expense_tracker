import React,{useState,useContext} from 'react'
import { FaBars, FaCog, FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ExpenseContext } from '../context/ExpenseContext';

export default function Navbar({ setSidebarOpen }) {
      const navigate=useNavigate()
       const {month,setmonth}=useContext(ExpenseContext)

       const [showProfile,setShowProfile]=useState(false)
       const name=localStorage.getItem("username")
       const email=localStorage.getItem("email")

       const handlelogout=()=>{
        localStorage.clear()
        navigate("/")
       }
  return (
    <nav className="bg-white  shadow-sm px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 flex">
          <img className='me-3' src="./expense_symbol.png" alt="" style={{width:"40px",height:"40px"}}/>Expense Tracker
        </h1>
      </div>


      <div className="flex items-center gap-3 md:gap-5">
      <input className='w-32 p-2 border-2 border-b rounded-xl sm:w-44 text-sm' type="month" value={month} onChange={(e)=>setmonth(e.target.value)} />

        <div className="relative">
  <img
    className="w-12 h-12 md:w-10 md:h-10 cursor-pointer"
    src="./user.png"
    alt=""
    onClick={() => setShowProfile(!showProfile)}
  />

  {showProfile && (
    <div className="absolute right-0 top-12 z-50 bg-white shadow-lg rounded-lg p-4 w-64 border">
      <p className="font-semibold text-center">{name}</p>
      <p className="text-sm text-gray-500 mb-3 text-center">{email}</p>

      <button
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  )}
</div>

      </div>
    </nav>
  );
}