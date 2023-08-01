import axios from 'axios'//import axios to backend
//Function userServices to return request backend
const userServices={}

userServices.register=function(data){

    return axios.post('http://localhost:5000/users/signup',data)
}
userServices.signin=function(data){
    return axios.post('http://localhost:5000/users/signin',data)
}
userServices.search=async()=>{
     await axios.get('http://localhost:5000/users/search').then((response=>{return response}))
     
}
export default userServices;//export userServices