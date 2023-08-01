import './App.css';
import{ RouterProvider}from 'react-router-dom'//import RouterProvider
import router from './Config/routes';//import router
//Funcion App to return APP component all code
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;//export app 
