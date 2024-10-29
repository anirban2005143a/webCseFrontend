import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './user/Profile'
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Profile />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
