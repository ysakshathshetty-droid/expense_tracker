import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ExpenseContext } from '../context/ExpenseContext'
import { useState } from 'react'

export default function Recentexptable() {
  const [deletingid,setdeletingid]=useState(null)
  const navigate=useNavigate()
  const {allexpense,filteredExpenses,month,removeExpenses,setShowEditModal,seteditexpense}=useContext(ExpenseContext)
  const monthName=new Date(month+"-01").toLocaleString("en-US",{ month:"long",year:"numeric"})

  const handledelete=async (id)=>{
    setdeletingid(id)
      await removeExpenses(id)
    setTimeout(()=>setdeletingid(null),1000)
  }
  return (
       <div className="bg-white rounded-xl shadow-md p-4 overflow-x-scroll lg:mt-5 min-h-[320px]">
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-xl font-semibold">
      Recent Expenses 
    </h2>

    <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 hover:cursor-pointer" onClick={()=>{navigate("/viewall")}}>
      View All
    </button>
  </div>

  <table className="w-full min-w-[495px] ">
    <thead>
      <tr className="border-b text-left">
        <th className="py-3">Title</th>
        <th className="py-3">Category</th>
        <th className="py-3">Amount</th>
        <th className="py-3">Date</th>
        <th className="py-3">Actions</th>
      </tr>
    </thead>

    <tbody>
      {filteredExpenses.length===0?(
        <tr >
          <td colSpan="5" className='text-center h-50 py-10 text-gray-500 font-medium'>No Data found!</td>
        </tr>
      )
      :(filteredExpenses.slice(0, 4).map((expense) => (
        <tr key={expense._id} className="border-b">
          <td className="py-2">{expense.title}</td>

          <td className="py-2">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
              {expense.category}
            </span>
          </td>

          <td className="py-2 font-medium">
            ₹{expense.amount}
          </td>

          <td className="py-2">
            {new Date(expense.date).toLocaleDateString("en-GB")}
          </td>

          <td className="py-2 flex gap-2">
            <button
              className="px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 hover:cursor-pointer"
           onClick={()=>{seteditexpense(expense),setShowEditModal(true) ;}} >
              Edit
            </button>

            <button
              className="px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-50 hover:cursor-pointer"
            onClick={()=>handledelete(expense._id)}>
              {deletingid===expense._id?"Deleting...":"Delete"}
            </button>
          </td>
        </tr>
      )))}
    </tbody>
  </table>
</div>
  )
}
