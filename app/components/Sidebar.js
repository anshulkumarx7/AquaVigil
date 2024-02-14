import React from 'react'
import Image from "next/image";
const Sidebar = () => {
  return (
 <div className="sidebar relative w-[18vw] ml-3 flex flex-col items-center justify-center gap-1 h-screen">
    <div className="">
    <div className="absolute top-[5%] left-[12%] flex items-center gap-2">
     <Image
   src="/logo.svg"
   alt="Vercel Logo"
   className=" w-[2vw]"
   width={200}
   height={46}
   priority
     />
     <h2 className="text-black font-medium text-xl">AquaVigil</h2>
     </div>
     </div>
     <div className="flex flex-col items-center justify-center">
       <div className="w-[14vw] h-[5vh] flex items-center justify-start p-4 rounded-md text-white bg-[#7B94F6]">
       <Image src="/House.svg" alt="Vercel Logo" className=" w-[1.3vw]" width={200}height={46}priority/>
           <h3 className='ml-1'>Home</h3>
       </div>
       <div className="w-[14vw] h-[5vh] flex items-center justify-start p-4 mt-2  text-[#3A4264]">
       <Image src="/ListChecks.svg" alt="Vercel Logo" className=" w-[1.3vw]" width={200}height={46}priority/>
           <h3 className='ml-1'>Status</h3>
       </div>
       <div className="w-[14vw] h-[5vh] flex items-center justify-start p-4 mt-2 rounded-md text-[#3A4264]">
       <Image src="/User.svg" alt="Vercel Logo" className=" w-[1.3vw]" width={200}height={46}priority/>
           <h3 className='ml-1'>Profile</h3>
       </div>
      
     </div>
     <div className="fixed bottom-12 ">
     <div className="w-[14vw] h-[5vh] flex items-center justify-start p-4 mt-2  text-[#3A4264]">
       <Image src="/SignOut.svg" alt="Vercel Logo" className=" w-[1.3vw]" width={200}height={46}priority/>
           <h3 className='ml-1'>Logout</h3>
       </div>
       </div> 
    </div>
  )
}

export default Sidebar