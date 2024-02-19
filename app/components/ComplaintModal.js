import React from 'react'
import Image from "next/image";

const ComplaintModal = (props) => {
   let {img , category , user_name , comp_date , user_no , user_add , desc } = props
  return (
    <div className='w-[35vw] h-[82vh] bg-white flex flex-col items-center justify-start gap-20 border-2 rounded-md'>

         <div className="w-[35vw] h-[20vh] object-cover">
         <button className="w-[9vw] h-[6vh] bg-[#D89314] p-2 text-white flex items-center justify-center rounded-lg mt-3 z-20 absolute left-3 top-5" type="submit">{category}</button>
         <Image src={img} alt="img" className=" h-[32.5vh] " width={448} height={16} priority/>
         </div>
         <div className=" w-[35vw] h-[47vh] flex flex-col items-start justify-center p-7 gap-3">
            <div className="flex justify-center items-center gap-14">
                <div className="">
                    <h2 className='font-semibold text-sm'>{user_name}</h2>
                    <p className='text-[#3A4264]  text-xs'>Complaint Date - {comp_date}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                <Image src="/call.svg" alt="Vercel Logo" className=" w-[1.5vw] " width={200} height={46}priority/>
                <p className='text-sm'>{user_no }</p>
                </div>
            </div>
            <hr className='bg-[#E5EAF4] w-[100%]' />
            <div className="w-[18vw]">
                <h2 className='font-semibold text-sm'>Address</h2>
                <p className='text-[#3A4264]   text-xs'>{user_add}</p>
            </div>
            <hr className='bg-[#E5EAF4] w-[100%]' />
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[100%]">
                <h2 className='font-semibold text-sm'>Description</h2>
                <p className='text-[#3A4264]  text-xs'>{desc}</p>
                </div>
                <div className=" flex items-center justify-center gap-6">
                   <button className="w-[14vw] h-[5vh] bg-[#234DF0] p-5 text-white flex items-center justify-center rounded-lg mt-3" type="submit">Assign</button>
                   <button className="w-[14vw] h-[5vh] text-[#234DF0] border-[#234DF0] border-2 p-5 flex items-center justify-center rounded-lg mt-3" type="submit">Review</button>
                </div>
            </div>
            
         </div>
    </div>
  )
}

export default ComplaintModal