import React from "react";

export const postuserdetails=async(body)=>{
       const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/signup",{
              method:"POST",
              headers:{
                     "Content-Type":"application/json"
              },
      body:JSON.stringify(body)
       })
       return response.json()
}

export const loginuser=async(body)=>{
       const response=await fetch(" https://expense-tracker-gh8f.onrender.com/api/login",{
              method:"POST",
              headers:{
               "Content-Type":"application/json"
              },
              body:JSON.stringify(body)
             
       })
       return response.json()
}