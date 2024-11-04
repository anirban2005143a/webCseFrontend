import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../utiles/Navbar'
import Postcard from '../utiles/Postcard'
import LoadingPage from '../utiles/LoadingPage'

const Post = () => {

  const [allPosts, setallPosts] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [isAlert, setisAlert] = useState(false)
  const [alertMessage, setalertMessage] = useState("bdfgur idfuvnreg rfgthg")
  const [alertType, setalertType] = useState("danger")

  const navigate = useNavigate()
  const backendUrl = import.meta.env.VITE_REACT_BACKEND_URL

  // function to fetch all posts 
  const fetchPosts = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/post/fetch`)
      const data = await res.json()
      console.log(data)
      setisLoading(false)

      if (data.error) {
        setisAlert(true)
        setalertMessage(data.message)
        setalertType("danger")
      } else {
        setallPosts(data.posts)
      }
    } catch (error) {
      setisAlert(true)
      setalertMessage(error.message)
      setalertType("danger")
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <>
      {/* navbar  */}
      <Navbar />

      {/* loading icon while data is fetching  */}
      {!allPosts && <LoadingPage />}

      {/* alert component  */}
      {isAlert && <div className=' fixed z-50 top-0 left-0 w-full'>
        <Alert type={alertType} message={alertMessage} />
      </div>}


      {allPosts && <section id='allPosts' className=' flex justify-center my-20'>
        <div className=' flex flex-col item-center md:w-7/12 sm:w-10/12 w-full'>
          {allPosts.map((item , index , arr)=>{
            return <Postcard key={item._id} text={item.text} />
          })}
        </div>
      </section>}
    </>
  )
}

export default Post