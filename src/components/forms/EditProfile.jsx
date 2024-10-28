import React from 'react'
// import "../../css/form.css"

const EditProfile = (props) => {



    return (
        <div id='editProfile' className={`md:w-7/12 w-full md:my-10 my-4 overflow-auto`}>

            <div className=' relative'>
                <form action="" className=' bg-slate-100 w-full p-4  rounded-md '>
                {/* edit profile picture  */}
                <div className="profileImg w-full flex justify-center items-center my-6">
                    <div className="img rounded-full border-2 border-white sm:w-36 w-28 sm:h-36 h-28 relative">
                        <img className='w-full h-full object-cover object-center rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuVuPcj7aQr6kzZkw0D94IOKcF2uBccRPmw&s" alt="profile image" />

                        {/* image input for edit  */}
                        <input type="file" accept='image/*' id='choosenProfileImg' className=' hidden ' />
                        <label htmlFor='choosenProfileImg' className="editIcon cursor-pointer absolute bottom-0 right-[5%] bg-black text-white text-xl p-2 rounded-full"><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg></label>
                    </div>
                </div>

                {/* edit name and other details  */}

                {/*edit name*/}<div className=' my-6'>
                    <label for="inputname" className="block text-gray-800 font-semibold text-sm">Enter Name</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="inputname"
                            className="block w-full  rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            placeholder='Edit name'
                        />
                    </div>
                </div>

                {/*edit tag*/}<div className=' my-6'>
                    <label for="inputname" className="block text-gray-800 font-semibold text-sm">Enter your tag</label>
                    <div className="mt-2">
                        <textarea
                            type="text"
                            name="inputname"
                            className="block w-full min-h-20 max-h-48 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            placeholder='Edit tag'
                        />
                    </div>
                </div>

                {/*edit about*/}<div className=' my-6'>
                    <label for="inputname" className="block text-gray-800 font-semibold text-sm">About yourseft</label>
                    <div className="mt-2">
                        <textarea
                            type="text"
                            name="inputname"
                            className="block w-full min-h-20 max-h-48 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            placeholder='Edit description'
                        />
                    </div>
                </div>

                {/* submit button  */}
                <div className=' flex justify-center '>
                    <button className=' bg-blue-600 text-lg text-white font-semibold p-2 rounded-md '>Apply changes</button>
                </div>

            </form>

                {/* close btn  */}
                <div className="closeFormBtn absolute top-2 right-2">
                    <button className='closeBtn hover:scale-105' onClick={()=>{
                        props.setisEditForm(false)
                    }}>
                        <svg className=' w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill='black' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default EditProfile