import React, { useState } from 'react'//Import useState
import toast, { Toaster } from 'react-hot-toast';//Import toaster after installing to make some alert
import userServices from '../services/UserServices';//Job of this component created and import from userServices from backend
import { Link, useNavigate } from 'react-router-dom';//Import Link && useNavigate to navigue with link or function
//this Function to open count after making
const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errors,setErrors]=useState({
    email:"",
    password:""
  })
  
  const formValidation=()=>{
    let stat=true;
    let localerrors={...errors}
  if(email === ""){
    localerrors.email='Email required'
    stat=!false;
  }
  if(password === ""|| password.length <= 8){
    localerrors.password='Password required and min 8 caracteres'
    stat=false;
  }
  setErrors(localerrors)
  // console.log(localerrors)
  return stat;
  }

  const signin= async (e)=>{
    e.preventDefault();
    console.log("form login submited")

    if(formValidation()){//form valid
      const data={
        email:email,
        password:password
      }
      try{
        
        const response = await userServices.signin( data )
        toast.success(`User Login Successfully ...'${email}`);
        console.log("responce===>",response)
        //save user data local storge
 localStorage.setItem("user_data" ,JSON.stringify(response.data.user)    )
localStorage.setItem("token",response.data.token)
        
        setEmail('')
        setPassword('')

        //reaction 
        navigate('/home')

      }catch(err){
      console.log(err);
      toast.error(err.response.data.mes,'Failed while Signin...');
      }
    }else{//form valid
        console.log("form invalid")
        toast.error('Failed while Sign In...');
    }
  }
  

  return (
    <div className='login'>
    <Toaster/>
<div className='login-cover'>


</div>
<div className='login-content'>
       <div>
           <h1>Bango Chat</h1>
              <p>Bango Chat Social Media Application</p>
       </div>
       <div>
        <form onSubmit={signin}>

        <div className='form-group'>
            <label>Your Email: </label>
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
            <label>.Password   : </label>
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
          <button className='btn signin' type='submit'>Sign In</button>
          <Link id='register' to={'/register'}><button >S'inscrire</button></Link>
        </form>
        </div>
    
</div>
    </div>
  )
}
export default Login //Export Login