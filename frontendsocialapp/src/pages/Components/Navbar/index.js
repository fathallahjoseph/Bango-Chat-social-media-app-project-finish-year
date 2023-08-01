import React, { useReducer } from 'react'//import useReducer
import './navbar.css'//import css
import { Link } from "react-router-dom";//import Link to navigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//import FontAwesomeIcon to mpicons
import { faCirclePlus , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'//icon imports from FontAwesomeIcon
//My function to retund Navbar
const Navbar = ({uer}) => {
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
    </>
  )
}

export default Navbar //export Navbar