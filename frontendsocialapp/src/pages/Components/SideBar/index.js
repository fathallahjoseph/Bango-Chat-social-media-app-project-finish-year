import React from 'react'
import './sidebar.css'//import css
import { Link, useNavigate } from "react-router-dom";//import link to navigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//import FontAwesomeIcon
import { faDeleteLeft, faGear, faHome, faPhotoFilm, faUsers } from '@fortawesome/free-solid-svg-icons'//import icon from...
import { faCalendarDays, faUser } from '@fortawesome/free-regular-svg-icons'//import Icons from ....
import axios from 'axios';//imort axios frombackend
//my Function to Return a Sidebar
const SideBar = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='sidebar'>
<div className='sidebar_menu'>
<Link  style={{height:"10px",textDecoration:"none"}} to={"/home"}><a className='active'>
    {' '}
    <FontAwesomeIcon  icon={faHome} className='m3-e' />
    <b>Home</b>
    </a></Link>
    <Link   className='bib' to={"/people"} style={{height:"10px",textDecoration:"none"}}><a>
    {' '}
    <FontAwesomeIcon icon={faUsers} className='m3-e' />
    <b>People</b>
    </a></Link>
<a>
{' '}
    <FontAwesomeIcon icon={faPhotoFilm} className='m3-e'/>
    <b>Photos</b>
    </a>
<a>
{' '}
    <FontAwesomeIcon icon={faCalendarDays} className='m3-e'/>
    <b>News Feed</b>
    </a>
    <Link className='bib' to={"/profile"} style={{height:"10px",textDecoration:"none"}}><a>
{' '}
    <FontAwesomeIcon icon={faUser} className='m3-e'/>
  <b>Profile</b>
    </a></Link>
    <Link to={"/settings"}  style={{height:"10px",textDecoration:"none"}}>   <a>
{' '}
    <FontAwesomeIcon icon={faGear} className='m3-e' />

    <b>Settings</b>
  </a>  </Link>
     <a onClick={()=>{
    localStorage.clear();
    navigate('/')
   }} type='Log Out'>
{' '}
    <FontAwesomeIcon icon={faPhotoFilm} className='m3-e'/>
    <b>LogOut</b>
    </a>
</div>
    </div>
  
    </>
  )
}

export default SideBar //export SideBar