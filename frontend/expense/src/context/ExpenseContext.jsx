import React,{createContext,useState,useEffect} from 'react'
import { getallexpenses,deleteExpense,saveexpense,updateExpense} from '../api/table'

export const ExpenseContext=createContext();

export default function ExpenseProvider({children}) {
  const [allexpense,setallexpense]=useState([])
       const [editexpense,seteditexpense]=useState(null)
       const [month,setmonth]=useState(new Date().toISOString().slice(0,7))
       const[showEditModal,setShowEditModal]=useState(false)
       const fetchexpenses=async()=>{
              const token=localStorage.getItem("token")
               if(!token){
                     setallexpense([])
                     return
               }
              const data=await getallexpenses()
              setallexpense(Array.isArray(data)?data:[])
       }

       const filteredExpenses=allexpense.filter(expense=>expense.date.slice(0,7)===month)

       useEffect(()=>{
              fetchexpenses()
       },[])
        const addExpense=async(body)=>{
              await saveexpense(body)
              await fetchexpenses()
       }
       const editExpense=async (id,body)=>{
              const updatedExpense=await updateExpense(id,body)
               setallexpense(allexpense.map(expense=>expense._id===id?updatedExpense:expense))
               await fetchexpenses()
       }
       const removeExpenses=async(id)=>{
              await deleteExpense(id)
              fetchexpenses()
       }
  return (
    <ExpenseContext.Provider value={{allexpense,setallexpense,fetchexpenses,month,setmonth,addExpense,editExpense,filteredExpenses,
       removeExpenses,setShowEditModal,showEditModal,editexpense,seteditexpense}}>{children}</ExpenseContext.Provider>
  )
}
