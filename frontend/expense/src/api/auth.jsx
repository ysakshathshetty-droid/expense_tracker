import React from "react";

export const postuserdetails=async(body)=>{
       const response=await fetch("http://localhost:8000/api/signup",{
              method:"POST",
              headers:{
                     "Content-Type":"application/json"
              },
      body:JSON.stringify(body)
       })
       return response.json()
}

export const loginuser=async(body)=>{
       const response=await fetch("http://localhost:8000/api/login",{
              method:"POST",
              headers:{
               "Content-Type":"application/json"
              },
              body:JSON.stringify(body)
             
       })
       return response.json()
}