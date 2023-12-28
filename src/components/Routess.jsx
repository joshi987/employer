import React from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Router,Routes } from 'react-router-dom';

import Login from './HomePage'
import Profile from './Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login/>}>
    
    <Route path='analytics' element={<Profile/>}/>
    {/* <Route path='file' element={<FileManager/>}/> */}
    </Route>)
    )

function Routess() {
  return (
    <>

    <RouterProvider router={router}/>
    <Outlet/>  
    </>
  )
}

export default Routess