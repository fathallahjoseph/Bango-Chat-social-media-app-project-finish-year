const express=require('express')//imp express
//import all functions form userController
const {signup,signin,Search,deleteuser,updateusername,updateuserpassword} = require('../controllers/userController')
const Route=express.Router()
Route.post('/signup',signup)
Route.post('/signin',signin)
Route.get('/search',Search)
Route.delete('/delete/:id',deleteuser)
Route.put('/put/:id',updateusername)
Route.put('/putpass/:id',updateuserpassword)

module.exports=Route