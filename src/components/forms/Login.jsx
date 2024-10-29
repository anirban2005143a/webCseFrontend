import React from 'react'
import { Link } from 'react-router-dom'
import bgimg from "/formbg.webp"

const Login = () => {
    return (
        <div id='login' className='min-h-[100vh] bg-cover bg-no-repeat flex flex-col items-center justify-center' style={{ backgroundImage: `url(${bgimg})` }}>
            {/* welcome  */}
            <header>
                <h1 className=' text-center font-bold text-5xl '>Welcome</h1>
            </header>

            {/* form  */}
            <div className="login-form min-w-96 md:w-5/12 sm:w-9/12 w-full bg-[#86868652] my-6 md:p-4 p-2 rounded-lg backdrop-blur-sm">
                <form action="">
                    {/* inputs for email  */}
                    <div className="email w-full my-4">
                        <label htmlFor="loginEmail" className='px-2 md:text-base text-sm'>Enter email</label>
                        <input required id='loginEmail' type='email' className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                    </div>
                    {/* inputs for new password  */}
                    <div className="password w-full my-4">
                        <label htmlFor="loginPassword" className='px-2 md:text-base text-sm'>Enter password</label>
                        <input id='loginPassword' type='password' className='w-full my-1 rounded-full p-2 text-base text-black outline-none border-none' />
                    </div>

                    {/* submit button  */}
                    <div className=' flex justify-center mt-6'>
                        <button className=' md:text-base text-sm outline-none py-2 px-4 bg-blue-700 text-white rounded-full'>Log-in</button>
                    </div>

                    {/* did not have account  */}
                    <div className=' text-center font-light my-3 text-sm'>
                        don't have an account ? <Link to="/signup" className=' text-lg text-red-800 font-semibold hover:underline'>Sign-up</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login