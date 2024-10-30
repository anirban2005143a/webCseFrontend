import React from 'react'
import { Link } from 'react-router-dom'
import bgimg from "/formbg.webp"


const Signup = () => {

    const backendUrl = import.meta.env.VITE_REACT_BACKEND_URL

    const checkPassword = () => {
        const form = document.querySelector('form')
        const p1 = form.querySelector('input#userpassword').value
        const p2 = form.querySelector('input#repeatpassword').value
        if (p1 === p2) return true
        return false
    }

    const displaySelectedImages = (elem, file) => {

        const label = elem.querySelector('label')
        const img = elem.querySelector('img')

        img.src = URL.createObjectURL(file)

        img.classList.remove("hidden")


        label.classList.contains("w-full") ? (() => {
            label.classList.remove("w-full")
            label.classList.add("w-8")
        })() : (() => {
            label.classList.remove("w-32")
            label.classList.add("w-10")
        })()

        label.classList.contains("h-full") ? (() => {
            label.classList.remove("h-full")
            label.classList.add("h-8")
            label.classList.add("bottom-[5%]" ,"right-0") 
        })() : (() => {
            label.classList.remove("h-32")
            label.classList.add("h-10") 
            label.classList.add("bottom-[-10%]" ,"right-[2%]") 
        })()

        label.classList.add("absolute" , "bg-white" , "p-2")

    }

    const creatAccount = () => {
        checkPassword() ? (async () => {
            try {
                const form = document.querySelector('form')
                console.log("start")

                //creating formdata
                let formdata = new FormData()
                formdata.append('firstname', form.querySelector('input#firstname').value)
                formdata.append('lastname', form.querySelector('input#lastname').value)
                formdata.append('tags', form.querySelector('textarea#usertag').value)
                formdata.append('about', form.querySelector('textarea#userabout').value)
                formdata.append('email', form.querySelector('input#useremail').value)
                formdata.append('location', form.querySelector('input#userlocation').value)
                formdata.append('password', form.querySelector('input#userpassword').value)
                
                //sending api post request to create new user
                let res = await fetch(`${backendUrl}/api/auth/create`, {
                    method: "POST",
                    headers: {},
                    body: formdata
                })
                
                let data = await res.json()
                console.log(data)
                
                formdata = new FormData()
                formdata.append('backgroundImg', form.querySelector('input#profileBackgroundImg').files[0])
                formdata.append('profileImg', form.querySelector('input#profileimage').files[0])
                formdata.append('userId' , data.userId)
                // //upload images
                res = await fetch(`${backendUrl}/api/upload/profileImg` , {
                    method: "POST",
                    headers: {},
                    body: formdata
                })

                data = await res.json()
                console.log(data)

            } catch (error) {
                console.log(error.message)
            }

        })() : (() => {

        })()

    }

    return (
        <div id='signup' className='bg-[#bbbbbb88] flex justify-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="form md:w-7/12 sm:w-9/12 w-full md:p-3 p-2 md:m-4 sm:my-4 bg-[#7878785c] backdrop-blur-md">
                <form action="" className=' w-full' onSubmit={(e) => {
                    e.preventDefault()
                    creatAccount()
                }}>

                    {/* profile image and background image section  */}
                    <div className="profile-background h-[200px] bg-zinc-800 relative rounded-md" >
                        {/* input for background image  */}
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <input type="file" accept='image/*' id='profileBackgroundImg'
                                onChange={(e) => {
                                    displaySelectedImages(e.currentTarget.parentElement, e.currentTarget.files[0])
                                }} className=' hidden' />
                            <label htmlFor="profileBackgroundImg" className=' cursor-pointer w-32 h-32 z-10 rounded-full'>
                                <svg className=' w-full h-full' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#676767" stroke="none">
                                        <path d="M1615 4621 c-115 -37 -225 -123 -281 -218 -53 -90 -66 -148 -71 -305
l-5 -148 -385 0 c-428 0 -453 -3 -574 -66 -121 -63 -226 -189 -272 -323 l-22
-66 -3 -1245 c-2 -875 1 -1264 8 -1310 32 -187 171 -353 356 -427 l69 -28
2125 0 2125 0 69 28 c185 74 324 240 356 427 7 46 10 435 8 1310 l-3 1245 -22
66 c-46 134 -151 260 -272 323 -121 63 -146 66 -574 66 l-385 0 -5 148 c-5
157 -18 215 -71 305 -57 97 -168 182 -286 219 -51 16 -127 18 -945 17 -798 -1
-895 -3 -940 -18z m1161 -1176 c858 -150 1302 -1120 856 -1870 -333 -561
-1055 -769 -1636 -472 -369 188 -609 523 -671 937 -68 444 126 904 496 1180
143 107 339 192 514 223 110 20 331 21 441 2z"/>
                                        <path d="M2445 3034 c-379 -61 -667 -363 -704 -736 -39 -404 210 -766 607
-880 110 -32 314 -32 424 0 335 96 573 374 606 707 25 258 -57 493 -237 672
-99 99 -239 180 -376 217 -60 17 -263 29 -320 20z"/>
                                    </g>
                                </svg>
                            </label>
                            <img src="" alt="background-image" className=' w-full h-full top-0 left-0 hidden object-center object-cover brightness-[60%]' />
                        </div>
                        {/* input for profile picture  */}
                        <div className=' absolute top-[70%] left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#cccfd5] cursor-pointer z-10'>
                            <div className=' relative w-full h-full'>
                                <input type="file" accept='image/*' id='profileimage'
                                    onChange={(e) => {
                                        displaySelectedImages(e.currentTarget.parentElement, e.currentTarget.files[0])
                                    }} className=' hidden' />
                                <label htmlFor="profileimage" className='w-full h-full rounded-full z-10 flex justify-center items-center'>
                                    <svg className=' w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#525151' d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                                </label>
                                <img src="" alt="profile-image" className='rounded-full absolute w-full h-full top-0 left-0 hidden object-cover object-center' />
                            </div>
                        </div>
                    </div>

                    {/* other details section  */}
                    <div className=' mt-24'>
                        <div className="name flex md:flex-row flex-col justify-between items-center ">
                            <div className="firstname md:w-2/5 w-full">
                                <label htmlFor="firstname" className='px-2 md:text-base text-sm'>First name</label>
                                <input id='firstname' type="text" className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                            </div>
                            <div className="lastname md:w-2/5 w-full">
                                <label htmlFor="lastname" className='px-2 md:text-base text-sm'>Last name</label>
                                <input id='lastname' type="text" className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                            </div>
                        </div>
                        <div className="tag w-full my-2">
                            <label htmlFor="usertag" className='md:text-base text-sm px-2'>Enter tag</label>
                            <textarea name="usertag" id="usertag" className='mt-1 p-2 rounded-md min-h-14 max-h-28 outline-none w-full'></textarea>
                            <p className=' text-[12px] text-gray-500' >Some key word that describes you best</p>
                        </div>
                        <div className="email-and-location my-2 flex md:flex-row flex-col justify-between items-center">
                            {/* inputs for email  */}
                            <div className="email md:w-2/5 w-full">
                                <label htmlFor="useremail" className='px-2 md:text-base text-sm'>Enter email</label>
                                <input id='useremail' type="text" className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                            </div>
                            {/* inputs for location  */}
                            <div className="location md:w-2/5 w-full">
                                <label htmlFor="userlocation" className='px-2 md:text-base text-sm'>Enter location</label>
                                <input id='userlocation' type="text" className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                            </div>
                        </div>
                        <div className="intro">
                            <label htmlFor="userabout" className='md:text-base text-sm px-2'>Write a smoething about you</label>
                            <textarea name="userabout" id="userabout" className='mt-1 p-2 rounded-md min-h-24 max-h-40 outline-none w-full'></textarea>
                        </div>
                        <div className="password my-2 flex md:flex-row flex-col justify-between items-center">
                            {/* inputs for password  */}
                            <div className="password md:w-2/5 w-full">
                                <label htmlFor="userpassword" className='px-2 md:text-base text-sm'>Enter password</label>
                                <input id='userpassword' type='password' className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                            </div>
                            {/* inputs for new password  */}
                            <div className="repeat-password md:w-2/5 w-full">
                                <label htmlFor="repeatpassword" className='px-2 md:text-base text-sm'>Repeat password</label>
                                <input id='repeatpassword' type='password' className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                            </div>
                        </div>
                    </div>

                    {/* submit button  */}
                    <div className=' flex justify-center mt-6'>
                        <button className=' md:text-base text-sm outline-none py-2 px-4 bg-blue-700 text-white rounded-full'>Create account</button>
                    </div>

                    {/* already have an account  */}
                    <div className=' text-center font-light my-3 text-sm'>
                        Already have an account ? <Link to="/login" className=' text-lg text-red-800 font-semibold hover:underline'>log-in</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup