import React, { useState } from 'react'//Import useState
import userServices from '../services/UserServices'//userServices
import toast, { Toaster } from 'react-hot-toast';//Toast
import { useNavigate } from 'react-router-dom';//useNavigate
//Function to create a compte
const Register = () => {
  const navigate=useNavigate();
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [bio,setBio]=useState('')
  const [birthdate,setBirthdate]=useState('')
  const [Picture,setPicture]=useState('')
const [errors,setErrors]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  bio:"",
  birthdate:"",
})

const formValidation=()=>{
  var stat=true;
  let localerrors={...errors}
if(firstname ===""){
  localerrors.firstname='Firstname required'
  stat=false;
}
if(lastname ===""){
  localerrors.lastname='Lastname required'
  stat=false;
}
if(email === ""){
  localerrors.email='Email required'
  stat=!false;
}
if(password === ""|| password.length < 8 ){
  localerrors.password='Password required and min 8 caracteres'
  stat=false;
}
setErrors(localerrors)
// console.log(localerrors)
return stat;
}


  const register = async (e)=>{
    e.preventDefault();
if(formValidation()){//form valid
  const data={
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
    bio:bio,
    birthdate:birthdate,
    picture:Picture
  }
  try{
    const responce = await userServices.register( data )
    console.log("responce===>",responce)
    toast.success('User created Successfully ...');
    navigate('/login');
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    setBirthdate('')
    setBio('')
    setPicture('')
   
   
  }catch(err){
  console.log(err);
  toast.success('Failed while Signup...');
 
  }
}else{
  console.log("form invalid")
  toast.error('Failed while Signup...');
}
  }

  return (
    <div className='register'>
        <Toaster/>
<div className='register-cover'>


</div>

<div className='register-content'>
      <div>
           <h1>Bango Chat</h1>
              <p>Bango Chat Social Media Application</p>
       </div>
       <div>
        <form onSubmit={register}>
          <div className='form-group'>
            <label>Firstname </label>
         <input className='input' 
         value={firstname} type='text'
         onChange={(e)=>setFirstname(e.target.value)}/>
          { 
            errors.firstname != " " ?
            <div style={{textAlign:"left",color:'orangered'}}>
              {errors.firstname }
            </div>:''
          }
          </div>
          <div className='form-group'>
            <label>Lastname </label>
         <input className='input' 
         value={lastname} type='text'
         onChange={(e)=>setLastname(e.target.value)}/>
            { 
            errors.lastname != " " ?
            <div style={{textAlign:"left",color:'orangered'}}>
              {errors.lastname }
            </div>:''
          }
          </div>
          <div className='form-group'>
            <label>Your Email </label>
         <input className='input' 
         value={email} 
         type='email'
         onChange={(e)=>setEmail(e.target.value)}/>
            { 
            errors.email != " " ?
            <div style={{textAlign:"left",color:'orangered'}}>
              {errors.email }
            </div>:''
          }
          </div>
          <div className='form-group'>
            <label>Password  </label>
         <input className='input' 
         value={password} 
         type='password'
         onChange={(e)=>setPassword(e.target.value)}/>
            { 
            errors.password != " " ?
            <div style={{textAlign:"left",color:'orangered'}}>
              {errors.password }
            </div>:''
          }
          </div>
          <div className='form-group'>
            <label>Bio </label>
         <textarea maxLength={90} value={bio}
         onChange={(e)=>setBio(e.target.value)}>
         </textarea>
         { 
            errors.bio != " " ?
            <div style={{textAlign:"left",color:'orangered'}}>
              {errors.bio }
            </div>:''
          }
          </div>
          <div>
            <label className='form-group'>Birthdate </label>
         <input className='input'
          value={birthdate} 
          type='date'
          onChange={(e)=>setBirthdate(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label>Picture  </label>
         <input className='input' 
         value={Picture} 
         type='file'
         onChange={(e)=>setPicture(e.target.value)}/>
            { 
            errors.picture!= " " ?
            <div style={{textAlign:"left",color:'orangered'}}>
              {errors.picture}
            </div>:''
          }
           </div>
      <button className='btn signup' type='submit'>Sign Up</button>
        </form>
       </div>
  </div>
</div>
  )
}

export default Register //Export Register