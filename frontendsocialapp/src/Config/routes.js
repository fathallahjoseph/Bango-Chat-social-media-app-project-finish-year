import {createBrowserRouter} from "react-router-dom"//import createBrowserRouter  from react-router-dom
import Register from '../pages/Register.js';//import cmponent Register
import Login from '../pages/Login';//import cmponent Login  
import Home from '../pages/Home.js';//import cmponent Home
import PageNotFound from "../pages/PageNotFound.js";//import cmponent PageNotFound
import Profiles from "../pages/Components/Profiles.js";//import cmponent Profiles
import Setting from "../pages/Components/Setting.js";//import cmponent Setting
import People from "../pages/Components/People.js";//import cmponent People
import InterfacePage from "../InterfacePage.js";//import cmponent InterfacePage
//Function Get All path Bango Chat
const router = createBrowserRouter([
    {
      path : '/',element:<InterfacePage/>,errorElement:<PageNotFound/>
    },
    {
      path : '/login',element:<Login/>
    },
    {
      path : '/register',element:<Register/>
    },
    {
      path : '/home',element:<Home/>
    },
    {
   path : '/profile',element:<Profiles/>
    },
    {
      path : '/settings',element:<Setting/>
       },
       {
        path : '/people',element:<People/>
         }
  ])
  export default router;