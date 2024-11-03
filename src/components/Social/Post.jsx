import React from 'react'
import Navbar from '../utiles/Navbar'
import Postcard from '../utiles/Postcard'

const Post = () => {
  return (
    <>
    <Navbar/>
    <section id='allPosts' className=' flex justify-center my-4'>
        <div className=' flex justify-center md:w-7/12 sm:w-10/12 w-full'>
            <Postcard/>
        </div>
    </section>
    </>
  )
}

export default Post