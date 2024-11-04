import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProfile from '../components/forms/EditProfile'
import userContext from '../context/usercontext'
import LoadingPage from '../components/utiles/LoadingPage'
import Navbar from '../components/utiles/Navbar'
import CreatePost from '../components/forms/CreatePost'


const Profile = () => {

    const value = useContext(userContext)
    const [isEditForm, setisEditForm] = useState(false)
    const [isCreatePost, setisCreatePost] = useState(false)
    const [userDetails, setuserDetails] = useState({})
    const [profileImg, setprofileImg] = useState(null)
    const [backgroundImg, setbackgroundImg] = useState(null)

    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_REACT_BACKEND_URL


    const checkUser = async () => {

        const userId = localStorage.getItem('userId')
        const token = localStorage.getItem('token')

        if (userId && token) {
            const res = await value.checkUser
            !res ? navigate('/login') : fetchData()
        } else {
            navigate('/login')
        }
    }

    const fetchData = async () => {
        const res = await fetch(`${backendUrl}/api/auth/fetch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                userId: localStorage.getItem('userId'),
            })
        })
        const data = await res.json()
        console.log(data)

        //fetch images
        await fetchProfileImg(data.user.profileImg)
        await fetchBackgroundImg(data.user.backgroundImg)

        setuserDetails(data.user)
    }

    const fetchProfileImg = async (filename) => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const res = await fetch(`${backendUrl}/api/auth/profileImg?token=${token}&userId=${userId}&filename=${filename}`)
        setprofileImg(res.url)
    }

    const fetchBackgroundImg = async (filename) => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const res = await fetch(`${backendUrl}/api/auth/backgroundImg?token=${token}&userId=${userId}&filename=${filename}`)
        setbackgroundImg(res.url)
    }

    useEffect(() => {
        checkUser()
    }, [])

    useEffect(() => {
        isEditForm || isCreatePost ? (() => {
            document.body.style.overflow = 'hidden'
            window.scrollTo(0, 0)
        })() : document.body.style.overflow = ''
    }, [isEditForm, isCreatePost])


    return (
        <>

            {/* navbar  */}
            <Navbar />

            {/* loading icon while data is fetching  */}
            {Object.keys(userDetails).length === 0 && <LoadingPage />}

            {/* edit user form modal  */}
            <div className={` absolute top-0 left-0 w-full h-[100vh] flex justify-center z-10 bg-[rgba(0,0,0,0.5)] transition-all duration-1000 ${isEditForm ? " translate-y-0 " : " -translate-y-[150%] "}`}>
                <EditProfile
                    isEditForm={isEditForm}
                    setisEditForm={setisEditForm}
                    userDetails={userDetails}
                    setuserDetails={setuserDetails}
                    profileImg={profileImg}
                    fetchProfileImg={fetchProfileImg} />
            </div>

            {/* edit user form modal  */}
            <div className={` absolute top-0 left-0 w-full h-[100vh] flex justify-center z-10 bg-[rgba(0,0,0,0.5)] transition-all duration-1000 ${isCreatePost ? " translate-y-0 " : " -translate-y-[150%] "}`}>
                <CreatePost
                    isCreatePost={isCreatePost}
                    setisCreatePost={setisCreatePost} />
            </div>


            <div id='profile' className='flex justify-center relative' >

                {Object.keys(userDetails).length !== 0 && <div className=' md:w-8/12 w-full pt-24 pb-3 md:mx-2 mx-1 '>

                    {/* profile picture and name , tag , location , connections  */}
                    <header className=' '>

                        {/* background img  */} <div className="images relative w-full h-[150px] bg-cover bg-[rgba(0,0,0,0.56)] bg-blend-overlay user-select-none rounded-md"
                            style={{
                                backgroundImage: `${!backgroundImg ?
                                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s)" :
                                    `url(${backgroundImg})`}`
                            }}>

                            {/* profile image  */} <div className="profileImg absolute -bottom-[25%] left-0 rounded-full sm:w-36 w-28 sm:h-36 h-28 border-2 border-white m-3">
                                <img className=' w-full h-full object-cover object-center rounded-full'
                                    src={!profileImg ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuVuPcj7aQr6kzZkw0D94IOKcF2uBccRPmw&s" : `${profileImg}`}
                                    alt="profile-image" />
                            </div>
                        </div>
                        {/* profile intro  */}
                        <div className="name-tag-location md:w-10/12 w-full mt-6 p-2  ">
                            {/* name and connection  */} <div className="name text-2xl font-bold">{Object.keys(userDetails).length === 0 ? 'Anirban Das' : userDetails.firstname + " " + userDetails.lastname} <span className='connections text-[0.8rem] font-normal px-3 cursor-pointer hover:underline hover:text-blue-800 '>200+ connections</span></div>
                            {/* tag  */} <div className="tag text-lg font-normal">{Object.keys(userDetails).length === 0 ? "Full stack web developer,Full stack web developer,Full stack web developer" : userDetails.tags}</div>
                            {/* location  */} <div className="location text-sm font-thin text-[rgb(63,63,63)] py-3 ">{Object.keys(userDetails).length === 0 ? "Kolkata , West Bengal" : userDetails.location}</div>
                        </div>
                    </header>

                    <main>
                        {/* about user  */}
                        <div className="about rounded-md p-2 my-4 bg-[rgb(232,234,246)] ">
                            <div className=' flex justify-between items-center'>
                                <h3 className=' font-normal text-xl px-3'>About</h3>
                                <div className="edit cursor-pointer text-xl p-3 hover:scale-110"><i className="fa-solid fa-pencil"></i></div>
                            </div>

                            {/* description  */}
                            <div className="desc p-2 font-normal text-[#505050] text-sm">{Object.keys(userDetails).length === 0 ? "" : userDetails.about}</div>

                        </div>

                        {/* user posts  */}
                        <div className="posts rounded-md p-2 my-4 bg-[rgb(232,234,246)] ">
                            <div className='flex justify-between items-center'>
                                <h3 className='font-normal text-xl px-3'>Posts</h3>
                                <div className="edit cursor-pointer text-2xl p-3 hover:scale-110" onClick={(e) => {
                                    setisCreatePost(true)
                                }}><i className="fa-solid fa-plus"></i></div>
                            </div>
                        </div>

                        {/* edit and logout  */}
                        <div className="controls flex justify-between my-3">
                            <div className="editProfile"><button onClick={() => {
                                setisEditForm(true)
                            }} className='  bg-blue-600 rounded-md p-2 text-white font-semibold'>Edit Profile</button></div>
                            <div className="logout"><button onClick={() => {
                                navigate("/login")
                            }} className='  bg-red-600 rounded-md p-2 text-white font-semibold'>Log out</button></div>
                        </div>
                    </main>

                </div>}

            </div>
        </>
    )
}

export default Profile