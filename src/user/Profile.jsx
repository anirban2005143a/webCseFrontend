import React from 'react'

const Profile = () => {
    return (
        <div id='profile' className=' flex justify-center ' >
            <div className=' md:w-8/12 w-full md:p-3 p-2 md:m-4'>
                <header className=' '>

                    {/* background img  */} <div className="images relative w-full h-[150px] bg-cover bg-[rgba(0,0,0,0.56)] bg-blend-overlay user-select-none rounded-md" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s)" }}>

                        {/* profile image  */} <div className="profileImg absolute -bottom-[25%] left-0 rounded-full sm:w-36 w-28 sm:h-36 h-28 border-2 border-white m-3">
                            <img className=' w-full h-full object-cover object-center rounded-full'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuVuPcj7aQr6kzZkw0D94IOKcF2uBccRPmw&s"
                                alt="profile-image" />
                        </div>
                    </div>
                    {/* profile intro  */}
                    <div className="name-tag-location md:w-10/12 w-full mt-6 p-2  ">
                        {/* name  */} <div className="name text-2xl font-bold">Anirban Das <span className='connections text-[0.8rem] font-normal px-3'>200+ connections</span></div>
                        {/* tag  */} <div className="tag text-lg font-normal">Full stack web developer,Full stack web developer,Full stack web developer</div>
                        {/* location  */} <div className="location text-sm font-thin text-[rgb(63,63,63)] py-3 ">Kolkata , West Bengal</div>
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
                        <div className="desc p-2 font-normal text-[#505050] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsum iure quidem obcaecati, temporibus fuga nemo vitae accusamus, quis nesciunt ipsam nihil, assumenda eligendi? Distinctio error veritatis architecto ea culpa!</div>

                    </div>

                    {/* user posts  */}
                    <div className="posts rounded-md p-2 my-4 bg-[rgb(232,234,246)] ">
                        <div className=' flex justify-between items-center'>
                            <h3 className=' font-normal text-xl px-3'>Posts</h3>
                            <div className="edit cursor-pointer text-xl p-3 hover:scale-110"><i className="fa-solid fa-pencil"></i></div>
                        </div>


                    </div>
                </main>
            </div>

        </div>
    )
}

export default Profile