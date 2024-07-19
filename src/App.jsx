import React,{ useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MasterLayout from './Layout/MasterLayout'
import Home from './screens/Home/home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<Home />} />
     
    </Route>
  )
)

function App() {

  return (
     <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
