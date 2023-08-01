import React from 'react'
import "./Story.css"//imort css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
//Function Story to Return Component Story
const Story = (props) => {
  const {type}=props
  return (
    <>
    {
      type ==="new"?( <div className='story new' >
        <FontAwesomeIcon 
        icon={faPlusSquare} 
        size="l" 
        className='addIconn'/>
        <span>Add Story</span>
      </div>
      ) :
      (<div className='story old 'style={{backgroundImage:`url(${props.data.story_photo})`}}
       >
      <div className='user-details'><img src={props.data.user_photo}/> 
     <h3>{props.data.username}</h3>{console.log(props.data.username)}</div>
     
      </div>
      )}

    </>
  )
}

export default Story;//Export Story