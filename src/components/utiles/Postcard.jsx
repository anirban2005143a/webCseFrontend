import React from 'react'

const Postcard = () => {
  return (
    <div id='Postcard' className=' bg-slate-200 w-full'>
        {/* header includes poster name , tags , about him/her , send connection etc  */}
        <header className=' flex justify-between items-center mx-3 py-2 my-2 border-b-[1px] border-black'>
            {/* user  */}
            <div className=' flex items-center gap-3'>
                <div className="userImg">
                <img className=' rounded-full w-12 h-12 object-cover object-center' src="/noaa-VRf6c6h9lRg-unsplash.jpg" alt="user image" />
            </div>
            <div className="userDetails">
                <div className="name text-lg font-medium">Anirban Das</div>
                <div className="about text-sm font-normal text-gray-700">full stack web developer</div>
            </div>
            </div>
            {/* connection  */}
            <div className="connetion flex items-center text-xl text-blue-700">
                <p>Connect</p>
                <i className="fa-solid fa-plus m-0 p-0 font-extrabold px-2 "></i>
            </div>
        </header>

        {/* conting the text and images and videos that a user have posted  */}
        <div className="content p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptatem quibusdam voluptates fugit, ipsum vel omnis, delectus est neque alias voluptatibus? Quo rem maiores eligendi veritatis tempora tenetur id corrupti.
            Porro fuga enim totam quasi? Consectetur consequatur illo doloremque quisquam, temporibus suscipit ratione, ad corporis mollitia alias sapiente? Accusantium incidunt, recusandae dicta pariatur assumenda rem reiciendis asperiores numquam aliquid laboriosam.
            Quam recusandae odio harum veniam fugit? Nihil officiis officia placeat amet nulla maxime sunt quisquam velit cum laborum earum illo mollitia, nisi error quod nobis labore eum necessitatibus ipsam nam?
            Sit optio consequuntur quae laboriosam tenetur sed similique id animi aliquid ipsam corporis nulla neque dolores voluptate eveniet tempora, repellat perspiciatis! Soluta accusamus labore quo animi dolorum? Architecto, error sequi.
            Placeat aspernatur, sed laudantium nisi repellendus ut unde cumque qui alias facere sequi pariatur iure doloribus repellat cum animi temporibus soluta aperiam, consequatur sit. Tenetur rerum nostrum modi soluta sapiente.
        </div>
    </div>
  )
}

export default Postcard