import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import Addexpense from './Addexpense'
import Recentexptable from './Recentexptable'
import Budgetbar from './Budgetbar'
import Expensepiechart from './Expensepiechart'
import Graph from './Graph'

export default function Mainpage() {
      const {allexpense,month,setmonth,filteredExpenses}=useContext(ExpenseContext)
      
      const monthName=new Date(month+"-01").toLocaleString("en-US",{ month:"long",year:"numeric"})
      const total=()=>{
 return filteredExpenses.reduce((sum,expense)=> { return sum=sum+Number(expense.amount)},0)
}
const highestexpense=()=>{
if(filteredExpenses.length===0) return null
return filteredExpenses.reduce((max,expense)=>
   Number(expense.amount)>Number(max.amount)?expense:max
)
}
  return (
    <div className='bg-purple-100 min-h-screen'>
      <Navbar/>

     
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-5'>
        <div className='lg:col-span-2 space-y-3 w-full '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:mx-6">
     <Cards icon={"/graph.png"}
      title={monthName}
      amount={`₹${total()}`}
      footer={"Total"}
      color={"purple"}/>
     <Cards  icon={"/decrease.png"}
      title={"Highest Expense"}
      amount={`₹${highestexpense()?.amount || 0}`}
      footer={`${highestexpense()?.title || "No expense"}`}
      color={"red"}/>
     <Cards icon={"/transfer.png"}
      title={"Total Transactions"}
      amount={filteredExpenses.length}
      footer={monthName}
      color={"yellow"}/>
      </div>

<div className='grid lg:flex lg:items-start gap-2'>
<Addexpense/>
<Recentexptable filteredExpenses={filteredExpenses}/>
</div>
<Budgetbar/>
</div>

<div className='space-y-5  lg:col-span-1 lg:m-5'>
<Expensepiechart/>
<Graph/>
</div>

</div>
</div>

  )
}
