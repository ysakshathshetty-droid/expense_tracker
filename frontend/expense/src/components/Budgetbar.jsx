import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../context/ExpenseContext';
import { useEffect } from 'react';

export default function Budgetbar() {
  const [budget,setbudget]=useState("");
  const [savebudget,setsavebudget]=useState(0)

  const {filteredExpenses}=useContext(ExpenseContext)   
  useEffect(()=>{
    fetchbudget()
  },[])
 const fetchbudget=async()=>{
  try{
  const token=localStorage.getItem("token")
  const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/budget",{
    method:"GET",
    headers:{
      Authorization:token
    }
  })
  const data=await response.json()
  setsavebudget(data.budget)
}
catch(err){
   console.log(err)
}
 }  

   const spent =filteredExpenses.reduce((sum,expense)=>sum+Number(expense.amount),0)    
  const percentage = Math.min((spent / savebudget) * 100, 100);
  const remaining = savebudget - spent;
  const color=percentage<50?"bg-green-500":percentage<80?"bg-yellow-500":"bg-red-500"
 
   const handlesavebudget=async ()=>{
   try{
  
    const token=localStorage.getItem("token")
    const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/budget",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        Authorization:token
      },
      body:JSON.stringify({
        budget:Number(budget)
      })
    })
    console.log("received")
    const data=await response.json();
    console.log(data)
    setsavebudget(data.budget)
    
    setbudget("")
   } catch(err){
    console.log(err)
   }
   }
  return (
    <div className="bg-white rounded-xl shadow p-3  lg:w-[940px] lg:mx-5 mt-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
        <h2 className="text-lg font-semibold">Set Monthly Budget Goal</h2>
        <div className='flex flex-col sm:flex-row gap-3 mb-4'>
         <input className='border border-black border-2 rounded-xl pl-2' type="number" placeholder='Enter monthly budget' value={budget} onChange={(e)=>{setbudget(e.target.value)}} />     
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handlesavebudget}>
          Save
        </button>
        </div>
      </div>

      <div className="mb-2 flex justify-between text-sm">
        <span>
          Spent: <span className="font-semibold">₹{spent}</span>
        </span>

        <span>
          Budget: <span className="font-semibold">₹{savebudget}</span>
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 flex justify-between text-sm">
        <span>{percentage.toFixed(0)}%</span>
        <span>
          Remaining: <span className="font-semibold">₹{remaining}</span>
        </span>
      </div>
    </div>
  );
}
