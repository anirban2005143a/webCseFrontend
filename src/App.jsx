import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserContext from './context/usercontext';
import Profile from './user/Profile'
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Post from './components/Social/Post';

function App() {

  const backendUrl = import.meta.env.VITE_REACT_BACKEND_URL

  //function to check is user or not
  const checkUser = async () => {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    if (userId && token) {
      const res = await fetch(`${backendUrl}/api/auth/checkUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({ userId })
      })
      const data = await res.json()
      // console.log(data)
      return data.error ? false : true
    } else {
      return false
    }

  }

  const router = createBrowserRouter([
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/",
      element: <Post />
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
    <UserContext.Provider value={{
      checkUser
    }}>

      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
