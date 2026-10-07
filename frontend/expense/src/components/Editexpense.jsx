import React,{useContext, useState,useEffect} from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import { toast } from 'react-toastify'
export default function Editexpense() {
       const [title,settitle]=useState("")
         const [amount,setamount]=useState("")
         const [category,setcategory]=useState("")
         const [date,setdate]=useState("")
       
       const {showEditModal,setShowEditModal,seteditexpense,editexpense,editExpense}=useContext(ExpenseContext)
      useEffect(()=>{
    if(editexpense){
    settitle(editexpense.title)
    setamount(editexpense.amount)
    setcategory(editexpense.category)
    setdate(editexpense.date.slice(0,10))
    }
  },[editexpense])

    const handlesave=async ()=>{
      const body={
      title,
      amount,
      category,
      date
    }
    if(title.trim()==="" ||
    amount==="" || category.trim()==="" || date===""){
    toast.warning("Please fill all the fields")
    return
  }
   await editExpense(editexpense._id,body)
    setShowEditModal(false)
   seteditexpense(null)
   toast.success("Edited successfuly!")
  }
  return (
  <>
       {showEditModal && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">

    <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Edit Expense
      </h2>

      <input
        type="text"
        className="w-full border rounded-md p-2 mb-3"
        placeholder="Title"
     value={title} onChange={(e)=>{settitle(e.target.value)}} />

      <input
        type="number"
        className="w-full border rounded-md p-2 mb-3"
        placeholder="Amount"
     value={amount} onChange={(e)=>{setamount(e.target.value)}} />

      <select className="w-full border rounded-md p-2 mb-4" value={category} onChange={(e)=>{setcategory(e.target.value)}}>
      <option>Select Category</option>
      <option>Food</option>
      <option>Transportation</option>
      <option>Shopping</option>
      <option>Education</option>
      <option>Entertainment</option>
      <option>Bills</option>
      <option>Travel</option>
      <option>Other</option>
      </select>
    <input
      type="date"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
    value={date} onChange={(e)=>{setdate(e.target.value)}}/>

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setShowEditModal(false)}
          className="px-4 py-2 border rounded-md"
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-md"
       onClick={handlesave} >
          Save
        </button>
      </div>
    </div>

  </div>)
       }
</>
  )
}
