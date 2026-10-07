import React from "react";
import { UNSAFE_WithErrorBoundaryProps } from "react-router-dom";


export const getallexpenses=async ()=>{
       try{
              const token=localStorage.getItem("token")
              if(!token)
              return;
const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/expense",{
       method:"GET",
       headers:{
              Authorization:token
       }
})
const allexpense=await response.json()
return allexpense;
}catch(err){
              console.log("err")
       }
}

export const deleteExpense=async (id)=>{
       try{
              const token=localStorage.getItem("token")
              const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/remove",{
                     method:"Delete",
                     headers:{
                        "content-type":"application/json",
                        Authorization:token
                     },
                     body:JSON.stringify({
                            id:id
                     })
                     
              })
              return await response.json()
       }catch(err){
              console.log(err)
       }
}

export const saveexpense=async (body)=>{
       const token=localStorage.getItem("token")
       const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/expense",{
              method:"POST",
              headers:{
                "content-type":"application/json",
                Authorization:token
              },
              body:JSON.stringify(body)
       })
       return response.json()
}
export const updateExpense=async (id,body)=>{
        const token=localStorage.getItem("token")
              const response=await fetch(` https://expense-tracker-gh8f.onrender.com/api/update/${id}`,{
                     method:"PATCH",
                     headers:{
                     "Content-Type":"application/json",
                     Authorization:token
                     },
                     body:JSON.stringify(body)
              })
              return await response.json();
       }