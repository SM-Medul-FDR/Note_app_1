import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {
// ----------- Redax Data
    const sliceUser = useSelector((state)=> state.currentUser.value)
    console.log(sliceUser)

    
        // console.log(JSON.parse(localStorage.getItem('currentUser')))


  return (
    <>
        <nav className=" py-3 bg-[#c1cc2575] px-5 ">
            <div className="flex justify-end">
                <div className="profileData flex items-center gap-2 ">
                    <div className="userPhoto border-2 border-black w-[40px] h-[40px] rounded-full bg-gray-400 ">
                        <img src={sliceUser?.photoURL} alt="demo" />
                    </div>
                    <h2 className='text-lg font-semibold ' >{sliceUser?.displayName}</h2>
                    <IoLogOutOutline className=' text-2xl text-gray-500   '/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar