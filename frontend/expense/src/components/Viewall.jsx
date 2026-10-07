import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ExpenseContext } from '../context/ExpenseContext'

export default function Viewall() {
       const navigate=useNavigate()

        const {allexpense,filteredExpenses,month,removeExpenses,setShowEditModal,seteditexpense}=useContext(ExpenseContext)
        const monthName=new Date(month+"-01").toLocaleString("en-US",{ month:"long",year:"numeric"})

        const handledelete=async (id)=>{
        await removeExpenses(id)
  }
  return (
       <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 border rounded-md hover:bg-gray-100"
      >
        ← Back
      </button>
    <div className="bg-white rounded-xl shadow-md p-4">
  
  <h2 className="text-2xl font-semibold mb-4">
    All Expenses - {monthName}
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full min-w-[700px]">
      
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
        {filteredExpenses.length === 0 ? (
          <tr>
            <td
              colSpan="5"
              className="text-center h-40 text-gray-500 font-medium"
            >
              No Data Found
            </td>
          </tr>
        ) : (
          filteredExpenses.map((expense) => (
            <tr
              key={expense._id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-3">{expense.title}</td>

              <td className="py-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  {expense.category}
                </span>
              </td>

              <td className="py-3 font-medium">
                ₹{expense.amount}
              </td>

              <td className="py-3">
                {new Date(expense.date).toLocaleDateString("en-GB")}
              </td>

              <td className="py-3">
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-blue-400 text-blue-500 rounded-md hover:bg-blue-50"  onClick={()=>{seteditexpense(expense),setShowEditModal(true) ;}}>
                    Edit
                  </button>

                  <button className="px-3 py-1 border border-red-400 text-red-500 rounded-md hover:bg-red-50" onClick={()=>handledelete(expense._id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>

    </table>
  </div>
</div>
</div>
  )
}
