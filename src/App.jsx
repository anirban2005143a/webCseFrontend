import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './user/Profile'
import Login from './components/forms/Login';

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
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
