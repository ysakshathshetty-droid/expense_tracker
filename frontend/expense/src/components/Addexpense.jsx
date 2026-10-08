import React,{useContext,useState} from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import { toast } from 'react-toastify'

export default function Addexpense() {
  const [loading,setloading]=useState(false)
  const [title,settitle]=useState("")
  const [amount,setamount]=useState("")
  const [category,setcategory]=useState("")
  const [date,setdate]=useState("")

  const {addExpense,editexpense,editExpense}=useContext(ExpenseContext)


  const handlesave=async ()=>{
    if(title.trim()==="" ||
  amount==="" || category.trim()==="" || date===""){
    toast.warning("Please fill all the fields")
    return
  }
    const body={
      title,
      amount,
      category,
      date
    }
    setloading(true)
    await addExpense(body)
    setloading(false)
   toast.success("Expense added successfuly!")
  settitle("")
  setamount("")
  setcategory("")
  setdate("")
  }
   
  return (
    <div className="bg-white rounded-xl shadow-md p-2 w-full lg:w-sm lg:mx-5 mt-5 max-h-[322px] overflow-auto">

  <h2 className="text-xl font-bold mt-6 mb-3 text-center">
    Add Expense
  </h2>

  <div className="space-y-2">

    <input
      type="text"
      placeholder="Title"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
    value={title} onChange={(e)=>{settitle(e.target.value)}}/>

    <input
      type="number"
      placeholder="Amount"
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
    value={amount} onChange={(e)=>{setamount(e.target.value)}}/>

    <select
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
    value={category} onChange={(e)=>{setcategory(e.target.value)}}>
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

  </div>
<div className='flex justify-center'>
  <button
      className="w-20 align-items-center  bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium mt-2 hover:cursor-pointer"
    onClick={handlesave}>
      {loading?"Saving...":"Save"}
    </button>
</div>

</div>
  )
}
