import React from 'react'

const Postcard = (props) => {
    return (
        <div id='Postcard' className=' bg-slate-200 w-full my-4 rounded-lg'>
            {/* header includes poster name , tags , about him/her , send connection etc  */}
            <header className=' flex justify-between items-center mx-3 py-2 my-2 border-b-[1px] border-black'>
                {/* user  */}
                <div className=' flex items-center gap-3'>
                    <div className="userImg cursor-pointer">
                        <img className=' rounded-full w-12 h-12 object-cover object-center' src="/noaa-VRf6c6h9lRg-unsplash.jpg" alt="user image" />
                    </div>
                    <div className="userDetails">
                        <div className="name text-lg font-medium">Anirban Das</div>
                        <div className="about text-sm font-normal text-gray-700">full stack web developer</div>
                    </div>
                </div>
                {/* connection  */}
                <div className="connetion flex items-center text-xl text-blue-700 cursor-pointer">
                    <p>Connect</p>
                    <i className="fa-solid fa-plus m-0 p-0 font-extrabold px-2 "></i>
                </div>
            </header>

            {/* conting the text and images and videos that a user have posted  */}
            <div className="content p-3">
                {props.text}
            </div>
        </div>
    )
}

export default Postcard