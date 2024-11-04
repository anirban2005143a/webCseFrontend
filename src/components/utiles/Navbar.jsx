import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='navbar' className=' absolute w-full z-10 top-0 p-2 bg-slate-100 '>
            <div className=' w-full flex justify-between items-center'>
               
               {/* logo and search bar  */}
                <div className='flex items-center'>
                    {/* logo  */}
                    <Link to="/" className="logo w-12 h-12 ">
                        <img className=' w-full h-full' src="/logo.png" alt="logoImage" />
                    </Link>

                    {/* search bar  */}
                    <div className="searchBox cursor-pointer mx-4 md:w-96 sm:w-80 w-72 flex items-center justify-center rounded-lg bg-zinc-100 border-[1px] border-gray-800 overflow-hidden ">
                        <div className='input w-full'>
                            <input placeholder='Search user' className=' w-full outline-none p-2 text-black text-base' />
                        </div>
                        <div className="icon p-2 text-xl px-3 ">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                {/* nev menu bar  */}
                <div className="menu flex justify-center items-center gap-4 px-3">
                    <Link to="/" className=' cursor-pointer hover:underline underline-offset-8'>Posts</Link>
                    <div className=' cursor-pointer hover:underline underline-offset-8'>Notifications</div>
                    <div className=' cursor-pointer hover:underline underline-offset-8'>Connections</div>
                    <Link to='/profile' className=' cursor-pointer text-xl'><i className="fa-solid fa-user"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar