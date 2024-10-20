import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.module.css'

const Login = () => {
  
  const navigate = useNavigate();
  const [errorMsg, seterrorMsg] = useState(false)
  const [successMsg, setsuccessMsg] = useState(false)
  const [formData, setformData] = useState({
    email: "",
    password: "",

  });

  const handleChange = (ev) => {

    console.log(ev.target.value)

    setformData({
      ...formData,
      [ev.target.id]: ev.target.value
    })


    console.log(formData)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    
    try {
      const res = await fetch("http://localhost:3500/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json()
      console.log(data)
     setsuccessMsg(data.message)
      seterrorMsg(false)

      if (data.success == false) {
        seterrorMsg(data.message)
        setsuccessMsg(false)
        console.log("Error", errorMsg)
      }
       
      toast.success("Login Successfully")
       setTimeout(()=>{
        navigate('/app')
       },5000)
    } catch (error) {
      console.log(error)
      seterrorMsg(error.message)
    }
  }



  return (

    <div className='box'>

      <form onSubmit={handleSubmit} >
           <h1>Sign Up </h1>
        <div className='container'>
          <input type='email' placeholder='Enter  email' id='email' onChange={handleChange} />
          <input type='password' placeholder='Enter  password' id='password' onChange={handleChange} />
          <button type='submit'>Submit</button>
        </div>


        
        {errorMsg && errorMsg ?  <div className='error'>{errorMsg}</div> : ""} 
        {successMsg && successMsg ?  <div className='success'>{successMsg}</div> : ""} 
        
       
      </form>
      <ToastContainer theme='dark'/>
    </div>
  )
}

export default Login