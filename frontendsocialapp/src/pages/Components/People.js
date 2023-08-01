import React, { useState, useEffect } from 'react';//Import useState &&useEffect hooks
import  { useReducer } from 'react'//useReducer
import './Navbar/navbar.css'//import Navbar Component
import { Link, useNavigate } from "react-router-dom";//Import Link && useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userServices from '../../services/UserServices';
import axios from 'axios';
import { faCirclePlus , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
//Function People to return People component
const People = (uer,props) => {
  const [users, setUsers] = useState([]);

  const [connectedUser,setConnectedUser]=useState({})
  const navigate = useNavigate()
  const getConnectedUserData=()=>{
setConnectedUser(JSON.parse(localStorage.getItem('user_data')));
if(localStorage.getItem('user_data') === null ){//user not connected
  //redirection vers la page login
  navigate('/login');
}
};

const getusers=async()=>{
  await axios.get('http://localhost:5000/users/search').then(((response)=>{setUsers(response.data) }))}
  useEffect(() => {
    getusers()
    console.log(users)
  },[]);

  const fetchUsers = async () => {
    try {
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  return (
    <div>
      {/*navbar div*/}
     <div>
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
     </div>
      <h1>User List</h1>
      <ul>
        {users.map((User) => (
          <div className='username-card'>
          <div className='username_card_image'>
            
                 
      <img src='https://images.pexels.com/photos/17676702/pexels-photo-17676702/free-photo-of-matheus-diniz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </div>
          <div className='username_card_info'>
      <h3 className='username'>{User.lastname }</h3>
      <h3 className='username'>{User.firstname}</h3>
      <span className='small'>{User.email}</span> 
          </div>
      </div>
        ))}
      </ul>
      {/*div with css*/}
  <div>
  
  </div>
    </div>

  );
}
export default People;//export People