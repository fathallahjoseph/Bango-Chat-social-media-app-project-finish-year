import React, { useEffect, useState } from 'react'//import useEffect && useState hooks
import { useNavigate } from 'react-router-dom';//Import useNavigate to navigate after function
import Navbar from './Components/Navbar';//import component Navbar
import UserNameCard from './Components/UserNameCard.js';//import component UserNameCard
import SideBar from './Components/SideBar';//import component Sidebar
import Stories from './Components/Stories/Stories.js';//import component stories


//Function To Return My Page Home
const Home = () => {
  const [connectedUser,setConnectedUser]=useState({})
const navigate = useNavigate()
  const getConnectedUserData=()=>{
setConnectedUser(JSON.parse(localStorage.getItem('user_data')));
if(localStorage.getItem('user_data') === null ){//user not connected
  //redirection vers la page login
  navigate('/login');
}
};
  useEffect( ()=>{
    getConnectedUserData()
  },[]);
  return (
    <>
    <Navbar uer={connectedUser}/>
    <div className='layout-app'>
{/*left Box*/}
      <div style={{width:'25%'}}>
      <UserNameCard user={connectedUser}/>
      <SideBar/>
      </div>
{/*Middle Box*/}
      <div style={{width:'50%'}}>
     <Stories/>
      </div>
{/*right Box*/}
      <div style={{width:'25%'}}>
azeza
      </div>

    </div>

    {/* <h1>Hello { connectedUser.lastname +` `+  connectedUser.firstname}</h1> */}
    
    </>
  )
}

export default Home //export Function Home