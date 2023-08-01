import React from 'react'
import './usernamecard.css'//Import Css
//Function UserNameCard
const UserNameCard = ({user}) => {
  return (
    <>
<div className='username-card'>
    <div className='username_card_image'>
        { user.picture == "" ?(
           <h3 className='profile_caracter'>{user.firstname[0].toUpperCase()}</h3>) : (
<img src='https://images.pexels.com/photos/17676702/pexels-photo-17676702/free-photo-of-matheus-diniz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
 )}
    </div>
    <div className='username_card_info'>
<h3 className='username'> {user.firstname + ` ` + user.lastname}</h3>
<span className='small'> {user.email}</span>
    </div>
</div>
    </>
  )
}

export default UserNameCard//Export UserNameCard