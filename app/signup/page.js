'use client'
import Image from "next/image";
import { useForm } from 'react-hook-form'
// import {DevTool} from '@hookform/devtools'



export default function Home() {
  const {register , control , handleSubmit , formState} = useForm();
  const { errors} = formState

  const onSubmit = (data)=>{
      
  }

  return (
    <>
    <div className=" w-full flex items-center justify-center gap-7 mt-1 overflow-y-hidden ">
    <div className="w-1/2 h-screen">
      <div className="flex items-center justify-center relative">
      <div className="absolute top-[2%] left-[20%] flex items-center gap-2">
      <Image
    src="/logo.svg"
    alt="Vercel Logo"
    className="w-[2vw]"
    width={200}
    height={46}
    priority
      />
      <h2 className="text-black font-medium text-xl">AquaVigil</h2>
      </div>
      <div className="mt-16">
      <div className="flex flex-col items-start gap-7 mb-3">
      <div className="">
      <h1 className="text=[#292D42] font-bold text-3xl mb-1">Sign Up</h1>
       <p className="text-[#8DA6CD]">Enter your details to sign up!</p>
      </div>
       </div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="w-[28vw] h-[40.5vh]" noValidate>
        <label htmlFor="name" className="text-[#182467]">Name*</label>
        <input type="text" id="name" {...register("name" , {
          required :{
            value : true,
            message : "Name is required"
          }
        })} className="w-[27vw] h-[0.5vh] border-[#3B2C4DE] border-2 p-3 mt-2 focus:border-[#234DF0]"/>
         <p className="text-red-500 mb-3">{errors.name?.message}</p>
         <div className="flex justify-center items-center gap-4">
            <div className="">
            <label htmlFor="age" className="text-[#182467]">Age</label>
            <input type="number" id="age" name="age" className="w-[10vw] h-[0.5vh] border-[#3B2C4DE] border-2 p-3 mt-2 focus:border-[#234DF0]"></input>
            </div>
            <div className="relative">
            <label htmlFor="phNumber" className="text-[#182467]"> <span> <Image
                                                         src="/indFlag.svg"
                                                         alt="Vercel Logo"
                                                         className=" w-[1.3vw] absolute bottom-[10%] left-[6%]"
                                                         width={200}
                                                         height={46}
                                                         priority
                                                            /></span> Phone Number</label>
            <input type="number" id="phNumber" name="phNumber" className="w-[15vw] h-[0.5vh]  border-[#3B2C4DE] border-2 p-3 mt-2  focus:border-[#234DF0]"></input>
            </div>
         </div>
         <label for="location" className="text-[#182467]">Location*</label>
         <input type="text" id="location" name="location" className="w-[27vw] h-[0.5vh] border-[#3B2C4DE] border-2 p-3 mt-2 mb-2"></input>
         <label htmlFor="email" className="text-[#182467]">Email*</label>
        <input type="email" id="email" {...register("email" , {pattern : {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message : "Invalid email format"
        }})} className="w-[27vw] h-[0.5vh] border-[#3B2C4DE] border-2 p-3  mt-2"/> 
        <p className="text-red-600 mb-3">{errors.email?.message}</p>
        <label htmlFor="password" className="text-[#182467]">Password*</label>
        <input type="password" id="password" {...register("password" , {
          required :{
            value : true,
            message : "password is required"
          },
          pattern : {
            value : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
            message : "Password not in correct form"
          }
        })} className="w-[27vw] h-[0.5vh] border-[#3B2C4DE] border-2 p-3 mt-2"/>
         <p className="text-red-500 mb-3">{errors.password?.message}</p>
          <div className="flex items-center justify-start gap-2">
        <input type="checkbox" name="check" id="check" />
        <p className="text-[#3A4264]">Agree to <span className="text-[#234DF0]">Terms and Conditions</span></p>
          </div>
    
        <button className="w-[27vw] h-[6vh] bg-[#234DF0] p-5 text-white flex items-center justify-center rounded-lg mt-3" type="submit">Sign Up</button>
        <p className="text-[#182467] mt-5">Have an Account? <a href="/"><span className="text-[#234DF0] font-semibold cursor-pointer hover:underline">Sign In</span></a></p>
        </form>
        {/* <DevTool control={control} /> */}
        </div>
        </div>
    </div>
    <div className="w-1/2 h-screen bg-[#F5F7FD]">
    <Image
    src="/signup.svg"
    alt="Vercel Logo"
    className=" w-[42vw] p-10"
    width={200}
    height={46}
    priority
  />

    </div>
    
  </div>
  </>
  );
}
