import React from 'react'
import '../Components/Navbar/navbar.css'//import css just navbar 
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";//import Link to navigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//import FontAwesomeIcon to mpicons
import { faCirclePlus , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'//icon imports from FontAwesomeIcon
import settings from "./settings.png";//import img settings

import axios from 'axios';//import axios
//Function Setting to return Setting component
const Setting = (uer) => {
        const navigate=useNavigate();
        const [firstname,setFirstname]=useState('')
        const [password,setPassword]=useState('')    

        const updatename=async()=>{
          const name=JSON.parse(localStorage.getItem('user_data'))._id
          console.log(name)
          await axios.put(`http://localhost:5000/users/put/${name}`,{firstname:firstname})
        }
        const updatePW=async()=>{
          const name=JSON.parse(localStorage.getItem('user_data'))._id
          console.log(name)
          await axios.put(`http://localhost:5000/users/putpass/${name}`,{password:password})
        }
  return (

    <>
    <div className='navbar'>
<div className='navbar_left'>
  <Link to={'/home'}><b>Bango Chat</b></Link>
</div>
<div className='navbar_right'>
<div className='navbar_profile_search'><FontAwesomeIcon icon={faMagnifyingGlass} className='small gray' />
<input type='text' placeholder='Search'></input>
</div>
<button className='navbar_profile_button'><FontAwesomeIcon icon={faCirclePlus} />{" "}Create</button>
<div className='navbar_profile_image'>
  { uer.picture != undefined ?(
           <h3 className='profile_caracter'>{uer.firstname[0].toUpperCase()}</h3>) : (
<img src='https://images.pexels.com/photos/17676702/pexels-photo-17676702/free-photo-of-matheus-diniz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
 )} 
</div>
</div>
    </div>
    <div className='register'>
        <Toaster/>
<div className='register-cover' style={{backgroundImage:`URL(${settings})`,height:"400px"}}>
</div>

<div className='register-content'>
  <div>
       <h1>Bango Chat</h1>
          <p>Bango Chat Social Media Application</p>
   </div>
   <div>
    <form >
      <div className='form-group'>
        <label>Firstname </label>
     <input className='input' 
     value={firstname} type='text'
     onChange={(e)=>setFirstname(e.target.value)}/>
         <button 
         onClick={()=>updatename()}
         className='btn signup' type='submit'>Update Firstname</button>
      </div>
      <div className='form-group'>
            <label>Password  </label>
         <input className='input' 
         value={password} 
         type='password'
         onChange={(e)=>setPassword(e.target.value)}/>
             <button
             onClick={()=>updatePW()} className='btn signup' type='submit'>update Password</button>
          </div>
   </form>
   <button 
    onClick={()=>{
      const id=JSON.parse(localStorage.getItem('user_data'))._id
      console.log(id)
      axios.delete(`http://localhost:5000/users/delete/${id}`)
    }}
    
    style={{color:"white",backgroundColor:"black",borderRadius:'8px'}}>Delete</button> </div>
  
   </div> </div></>
  )
}

export default Setting;//Export Setting component