import React from 'react'
import './Stories.css'//Import css
import Story from './story/Story'//Import Story Component
//Function Stories To returncomponent Stories
const Stories= () => {
  const stos=[{
    username:'bashir',
    user_photo:'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story_photo:"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },{
    username:'asil',
    user_photo:'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story_photo:"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },{
    username:"zouhaier",
    user_photo:"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story_photo:"https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  }];
  return (
    <>
 <div className='stories'>
   <Story type="new"/>
   {
 stos.map(story => 
  <Story type="old" data={story}/>
   )}
  
  
 </div>
    </>
  )
}

export default Stories;//Export Stories