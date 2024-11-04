import React, { useState, useEffect } from 'react'
import Alert from '../utiles/Alert'
import { useNavigate } from 'react-router-dom'

const CreatePost = (props) => {

    const [isAlert, setisAlert] = useState(false)
    const [alertMessage, setalertMessage] = useState("bdfgur idfuvnreg rfgthg")
    const [alertType, setalertType] = useState("danger")
    const [isLoading, setisLoading] = useState(false)

    const nevigate = useNavigate()
    const backendUrl = import.meta.env.VITE_REACT_BACKEND_URL

    const displaySelectedImages = (elem, file) => {

        const label = elem.querySelector('label')
        const img = elem.querySelector('img')
        const maxSize = 5 * 1024 * 1024
        console.log(file.size)
        if (file.size > maxSize) {
            setisAlert(true)
            setalertMessage("Use a samller image with maximum size 2mb")
            setalertType("danger")
            return false;
        }

        img.src = URL.createObjectURL(file)

        img.classList.remove("hidden")


        label.classList.remove("w-32")
        label.classList.add("w-10")

        label.classList.remove("h-32")
        label.classList.add("h-10")
        label.classList.add("bottom-[-10%]", "right-[2%]")

        label.classList.add("absolute", "bg-white", "p-2")

    }

    const createPost = async () => {
        console.log(document.querySelector('#CreatePost').querySelector('textarea#post-text').value)

        try {

            const res = await fetch(`${backendUrl}/api/post/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    userId: localStorage.getItem('userId'),
                    text: document.querySelector('#CreatePost').querySelector('textarea#post-text').value
                })
            })
            const data = await res.json()
            console.log(data)
            setisLoading(false)

            if (data.error) {
                setisAlert(true)
                setalertMessage(data.message)
                setalertType("danger")
                return;
            }

            nevigate('/')
            const closeBtn = document.querySelector('#CreatePost').querySelector("button.closeBtn")
            closeBtn.click()


        } catch (error) {
            console.log(error)
            setisAlert(true)
            setalertMessage(error.message)
            setalertType("danger")
            setisLoading(false)
        }
    }

    return (

        <div id='CreatePost' className={`md:w-7/12 w-full md:my-10 my-4 overflow-auto relative`}>
            {/* alert component  */}

            {isAlert && <div className=' fixed z-50 top-0 left-0 w-full'>
                <Alert type={alertType} message={alertMessage} />
            </div>}


            <div className=' relative'>
                <form action="" className=' bg-slate-100 w-full p-4  rounded-md ' onSubmit={(e) => {
                    e.preventDefault()
                    createPost()
                    setisLoading(true)
                }}>
                    {/* edit profile picture  */}
                    <div className="post-image h-[200px] bg-zinc-800 relative rounded-md mt-8" >
                        {/* input for post image  */}
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <input type="file" accept='image/*' id='post-image'
                                onChange={(e) => {
                                    displaySelectedImages(e.currentTarget.parentElement, e.currentTarget.files[0])
                                }} className=' hidden' />
                            <label htmlFor="post-image" className=' cursor-pointer w-32 h-32 z-10 rounded-full'>
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
                            <img src="" alt="background-image" className=' w-full h-full top-0 left-0 hidden object-center object-cover' />
                        </div>
                    </div>

                    {/* text input for post  */}
                    <div className=' my-6'>
                        <label htmlFor="post-text" className="block text-gray-800 font-semibold text-sm">Write content</label>
                        <div className="mt-2">
                            <textarea
                                type="text"
                                id="post-text"
                                className="block w-full min-h-20 max-h-48 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                                placeholder='Write content'
                            />
                        </div>
                    </div>

                    {/* submit button  */}
                    <div className=' flex justify-center '>
                        <button className=' bg-blue-600 text-lg text-white font-semibold px-2 py-1 rounded-md ' disabled={isLoading} >
                            {isLoading ? <i className="fa-solid fa-spinner fa-spin text-2xl"></i> : "Post"}
                        </button>
                    </div>

                </form>

                {/* close btn  */}
                <div className="closeFormBtn absolute top-2 right-2">
                    <button className='closeBtn hover:scale-105' onClick={() => {
                        props.setisCreatePost(false)
                    }}>
                        <svg className=' w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill='black' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost