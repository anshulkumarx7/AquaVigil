"use client"
import Image from "next/image"
import { useForm } from "react-hook-form"
import Sidebar from "../../components/Sidebar"
const page = () => {
  const { register, control, handleSubmit, formState } = useForm()
  const { errors } = formState
  const onSubmit = (data) => {
      console.log(data)
      const newData = {
          name: data.name,
          address: data.address,
          state: data.state,
          phone: data.phNumber,
          description: data.description,  
      }
  }
  return (
    <>
      <div className="flex items-center justify-center gap-3 overflow-y-hidden">
        <div className="">
          <Sidebar />
        </div>
        <div className="complaint_form w-[38vw] h-screen flex items-start mt-2 justify-center">
          <div className="ml-9">
            <div className="">
              <h1 className="text=[#292D42] font-bold text-3xl text-[#272324] mb-1">
                Complaint Form
              </h1>
            </div>
            <div>
              <button className="flex items-center justify-center mt-4 bg-[#F4F7FE] w-[27vw] h-[5vh] p-6 rounded-lg">
                <span>
                  <Image
                    src="/whatsapp.svg"
                    alt="Google Logo"
                    className="w-6"
                    width={5}
                    height={10}
                    priority
                  />
                </span>
                <span className="ml-2 text-[#292D42]">
                  Complaint on Whatsapp
                </span>
              </button>
            </div>
            <div>
              <p className=" text-[#E5EAF4] flex items-center justify-center">
                <span className="mr-2">______________________ </span>
                <span className="text-[#B2C4DE]">or</span>
                <span className="ml-2">_______________________</span>
              </p>
            </div>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="w-[28vw] h-[43vh]"
              noValidate
            >
              <label htmlFor="name" className="text-[#3A4264] mt-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                className="w-[27vw] h-[4vh] border-[#3B2C4DE] border-2 p-4"
              />
              <p className="text-red-600 mb-3">{errors.name?.message}</p>
              <label htmlFor="address" className="text-[#3A4264]">
                Address*
              </label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
                className="w-[27vw] h-[4vh] border-[#3B2C4DE] border-2 p-4 "
              />
              <p className="text-red-500 mb-3">{errors.address?.message}</p>
              <label htmlFor="state" className="text-[#3A4264]">
                State*
              </label>
              <input
                type="text"
                id="state"
                {...register("state", {
                  required: {
                    value: true,
                    message: "State is required",
                  },
                })}
                className="w-[27vw] h-[4vh] border-[#3B2C4DE] border-2 p-4 "
              />
              <p className="text-red-500 mb-3">{errors.state?.message}</p>
              <div className="relative">
                <label htmlFor="phNumber" className="text-[#3A4264]">
                  {" "}
                  <span>
                    {" "}
                    <Image
                      src="/indFlag.svg"
                      alt="Vercel Logo"
                      className=" w-[1.5vw] absolute bottom-[25%] left-[3%]"
                      width={200}
                      height={46}
                      priority
                    />
                  </span>
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phNumber"
                  {...register("phNumber", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                  name="phNumber"
                  className="w-[27vw] px-12 h-[4vh] mb-2  border-[#3B2C4DE] border-2 p-4 focus:border-[#234DF0]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="description" className="text-[#3A4264]">
                  Description*
                </label>
                <textarea
                  id="description"
                  cols={30}
                  rows={4}
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                  className="border-[#3B2C4DE] border-2 p-4 focus:border-[#234DF0]"
                />
              </div>
              <button
                className="w-[27vw] h-[6vh] bg-[#234DF0] p-5 mt-2 text-white flex items-center justify-center rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" w-[46vw] h-screen">
          <div className="flex flex-col items-center justify-center h-[100%]">
            <p className="text-[#3A4264] mb-3 text-xl">Upload Image*</p>
            <Image
              src="/upload_img.svg"
              alt="Google Logo"
              className="w-[33vw] h-[52vh]"
              width={5}
              height={10}
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
