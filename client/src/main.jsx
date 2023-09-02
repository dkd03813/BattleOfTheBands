import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import Index from './Components/Index.jsx';
import Login from './Components/Login.jsx';
import Create from './Components/Create';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>

  },
  {
    path: "/create",
    element: <Create/>

  },
  {
    path: "/login",
    element: <Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
