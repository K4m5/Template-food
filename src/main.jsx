import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Login from './pages/login/Login';
import Signup from './pages/resgister/Signup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   <RouterProvider router={router} />

  </React.StrictMode>,

)
