import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import Index from './Components/Index.jsx';
import Login from './Components/Login.jsx';
import Create from './Components/Create';
import NavBar from './Components/NavBar';
import GameStart from './Components/GameStart';
import Account from './Components/Account';

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
  },
  {
    path: "/game",
    element: <NavBar/>,
    children: [
      {
        index: true,
        element: <GameStart/>
      },
      {
        path: "user/:id",
        element: <Account/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
