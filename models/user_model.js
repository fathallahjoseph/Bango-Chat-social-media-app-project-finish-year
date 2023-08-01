const mongoose=require('mongoose')//import mongoose
//My Function userSchema scoullette de db
const userSchema = new mongoose.Schema ({
     firstname : String,
     lastname : String,
     email : String,
     password : String,
     role : {
     type : String,
     enum : ['admin','user'],
     default : 'user'},
     bio : String,
     birthdate : Date ,
     picture:String, 
})
module.exports=mongoose.model('users',userSchema)//export function userSchema