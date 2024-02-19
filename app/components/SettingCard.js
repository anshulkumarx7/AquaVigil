import React from 'react'
import Image from "next/image";
const SettingCard = () => {
  return (
    <div className=' w-[19vw] h-[44vh] border-2 z-10 rounded-md flex flex-col items-start justify-start p-2 gap-2 bg-white  fixed top-11'>
        <div className="font-semibold ml-5 mt-2"> <h1 className=''>Setting</h1></div>
        <div className="w-[13vw] h-[32vh] flex flex-col items-start justify-center ml-3 gap-2">
            <div className=" w-[13vw] h-[5vh] flex items-center justify-start gap-2 p-4 rounded-md bg-[#7B94F6]"><Image src="/User.svg" alt="Vercel Logo" className="w-[1.3vw]" width={200} height={46} priority/><h2>Employee</h2></div>
            <div className="w-[13vw] h-[5vh] flex items-center justify-start gap-2 p-4 rounded-md"><Image src="/PencilSimple.svg" alt="Vercel Logo" className="w-[1.3vw]" width={200} height={46} priority/><h2>Edit Profile</h2></div>
            <div className="w-[13vw] h-[5vh] flex items-center justify-start gap-2 p-4 rounded-md"><Image src="/Info.svg" alt="Vercel Logo" className="w-[1.3vw]" width={200} height={46} priority/><h2>Help</h2></div>
            <div className="w-[13vw] h-[5vh] flex items-center justify-start gap-2 p-4 rounded-md"><Image src="/Users.svg" alt="Vercel Logo" className="w-[1.3vw]" width={200} height={46} priority/><h2>My Team</h2></div>
            <div className="w-[13vw] h-[5vh] flex items-center justify-start gap-2 p-4 rounded-md"><Image src="/SignOut.svg" alt="Vercel Logo" className="w-[1.3vw]" width={200} height={46} priority/><h2>Logout</h2></div>
        </div>
    </div>
  
  )
}

export default SettingCard