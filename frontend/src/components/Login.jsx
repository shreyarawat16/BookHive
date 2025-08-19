import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { signup, login} from '../firebase';
import { toast } from 'react-hot-toast';

const Login = () => {
   const [msg, setMsg]= useState("");
   
  const [signState, setSignState]= useState("Login");
  const [formData, setFormData]= useState({
    name: "",
    email: "",
    password:""
  })

  const handleSubmit =(e)=>{
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: ""
    })
  }
const handleChange= (e)=>{
  setFormData((currData)=>{
    return {
      ...currData,
      [e.target.name]: e.target.value
    }
  })
}
 const user_auth= async(e)=>{
  e.preventDefault();
   if(signState === "Login"){
     await login(
        formData.email,
        formData.password
     );
   }
   else if(signState === "Register"){
    await signup(formData.name, formData.email, formData.password);
   }
 }
  return (
    <div className='flex justify-center items-center'>
      <div className='rounded-lg shadow-lg py-10 px-8 max-w-sm w-full mt-10 mb-10 h-full'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center '> {signState} </h2>
       <form className='flex flex-col' onSubmit={handleSubmit}>
        { signState== "Register"? 
         <div className='my-4'>
          <label htmlFor='name' className="block text-base-content/80 text-md font-semibold mb-2">Enter name</label>
          <input value={formData.name} onChange={handleChange}
           type="text" name="name" id="name" placeholder="Username"  className="input shadow leading-tight focus:outline-none focus:shadow"  />
        </div> : <></> }
        <div className='my-4'>
          <label htmlFor='email' className="block text-base-content/80 text-md font-semibold mb-2">Enter email</label>
          <input value={FormData.email} onChange={handleChange} type="email" name="email" id="email" placeholder="Email Address" 
          className="input shadow leading-tight focus:outline-none focus:shadow"  
           />
        </div>

        <div className='my-4'>
           <label htmlFor='password' className="block text-base-content/80 font-semibold text-md mb-2">Enter Password</label>
          <input value={FormData.password} onChange={handleChange}
           type="password" name="password" id="password" className="input focus:outline-none focus:shadow shadow leading-tight" placeholder="Password" />
        </div>
       {
        msg && <p className='text-red-500 text-xs mb-3 italic'>{msg}</p>
       }
        <button type="submit" className='btn btn-primary mt-4' onClick={user_auth}> {signState} </button>
        </form>
        <div className='mt-4 cursor-pointer text-center'>
          {signState === "Login" ?  <p>
           Dont have an account?<span onClick={()=> setSignState("Register")} className='text-blue-600'>Please Register</span></p>
          : <p>Already have an account? <span onClick={()=> setSignState("Login")} className='text-blue-600'>Please Login</span> </p>}
          </div>

        {/* Google sign in  */}
        {signState === "Register" ?
        <div className='text-center mt-5'>
          <button className='btn btn-info'><FaGoogle/>Sign in using google</button>
        </div>
         : <></> }
        <p className='text-sm text-center mt-4 text-base-content/80'>2025 Book Hive. All rights reserved </p>
      </div>
    </div>
  )
}

export default Login
