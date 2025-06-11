import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Profil from './pages/Profil';
import Login from './pages/Login';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* <Route path="/" element={<RootLayout/>}> */}
           <Route path="" element={<Home />} />  
           <Route path="/profil" element={<Profil />} />  
           <Route path="/login" element={<Login />} />  
            
    {/* </Route> */}
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App