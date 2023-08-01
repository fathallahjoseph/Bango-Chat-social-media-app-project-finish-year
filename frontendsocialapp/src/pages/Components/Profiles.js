
import Navbar from './Navbar'//import Navbar
import React, { useEffect, useReducer, useState } from 'react'//imort hooks
import './profile.css'//import css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import SideBar from './SideBar'//import Sidebar Component
//Function Profiles to return Profiles Component
const Profiles = () => {
    const [connectedUser,setConnectedUser]=useState({})
const navigate = useNavigate()
const  uer={connectedUser}
  const getConnectedUserData=()=>{
setConnectedUser(JSON.parse(localStorage.getItem('user_data')));
if(localStorage.getItem('user_data') === null ){//user not connected
  //redirection vers la page login
  navigate('/register');
  
}
};
  useEffect( ()=>{
    getConnectedUserData()
  },[]);
  return (
   
<div className='profile'>
    <div className='navbar'>
<div className='navbar_left'>
<Link style={{listStyle:'none'}} to={'/home'}><b>Bango Chat</b></Link>

</div>
<div className='navbar_right'>
<div className='navbar_profile_search'><FontAwesomeIcon icon={faMagnifyingGlass} className='small gray' />
<input type='text' placeholder='Search'></input>
</div>
<button className='navbar_profile_button'><FontAwesomeIcon icon={faCirclePlus} />{" "}Create</button>
<div className='navbar_profile_image'>
  { uer.picture == "undefined" ?(
           <h3 className='profile_caracter'>awit{uer.connectedUser.firstname[0].toUpperCase()}</h3>) : 
        console.log(uer.connectedUser.firstname,"tlwj 3lya bro?")
  }
</div>
</div>
    </div>
 
  
<div className='Profile'>

<>
<div className='username-cart'>
  <div>  <p className='pict'>Profile Picture:</p></div>
    <div className='username_cart_image'>
        { uer.connectedUser.picture == "" ?(
           <h3 className='profile_caracter'>{uer.connectedUser.firstname[0].toUpperCase()}</h3>) : (
<img src='https://images.pexels.com/photos/17676702/pexels-photo-17676702/free-photo-of-matheus-diniz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
 )} 
    </div>

    <div className='username_cart_info'>
        <div>
        <h3 className='username'><p>LastName:</p> {uer.connectedUser.firstname } </h3>
        <div>
        <h3 className='username'><p className='pp'>FirstName:</p>{ uer.connectedUser.lastname}</h3>
        </div>
        </div>

<h3 className='username'><p className='email'>Email:</p>{uer.connectedUser.email} </h3>
    </div> <h3 className='username'><p className='pp'></p><p className='email'>Date Du Naissance:</p>{uer.connectedUser.birthdate} </h3>
    <div >
<h3 className='username'><p className='pp'>Bio:</p>{uer.connectedUser.bio} </h3>
    </div>
    </div>
 </>
    
    </div> </div> 
  )
}

export default Profiles //export Profiles