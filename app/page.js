"use client"
import Image from "next/image"
import { useForm } from "react-hook-form"
// import {DevTool} from '@hookform/devtools'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export default function Home() {
  const schema = yup.object({
    email: yup.string().email("Email format is not valid !").required(""),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must contain at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Password must contain at least 1 lowercase, 1 uppercase, and 1 special character"
      ),
  })
  const { register, control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  })
  const { errors } = formState

  const onSubmit = (data) => {}

  return (
    <>
      <div className=" w-full flex items-center justify-center gap-7 mt-1 overflow-y-hidden">
        <div className="w-1/2 h-screen">
          <div className="flex items-center justify-center relative">
            <div className="absolute top-[2%] left-[20%] flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Vercel Logo"
                className="dark:invert w-[2vw]"
                width={200}
                height={46}
                priority
              />
              <h2 className="text-black font-medium text-xl">AquaVigil</h2>
            </div>
            <div className="mt-20">
              <div className="flex flex-col items-start gap-7 mb-3">
                <div className="">
                  <h1 className="text=[#292D42] font-bold text-3xl mb-1">
                    Sign In
                  </h1>
                  <p className="text-[#8DA6CD]">
                    Enter your email and password to sign in
                  </p>
                </div>

                <div>
                  <button className="flex items-center justify-center bg-[#F4F7FE] w-[27vw] h-[5vh] p-6 rounded-lg">
                    <span>
                      <Image
                        src="/google.svg"
                        alt="Google Logo"
                        className="w-6"
                        width={5}
                        height={10}
                        priority
                      />
                    </span>
                    <span className="ml-2 text-[#292D42]">
                      Sign in with Google
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
              </div>
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="w-[28vw] h-[43vh]"
                noValidate
              >
                <label htmlFor="email" className="text-[#182467]">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-[27vw] h-[4vh] border-[#3B2C4DE] border-2 p-4  mt-2"
                />
                <p className="text-red-600 mb-3">{errors.email?.message}</p>
                <label htmlFor="password" className="text-[#182467]">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="w-[27vw] h-[4vh] border-[#3B2C4DE] border-2 p-4 mt-2"
                />
                <p className="text-red-500 mb-3">{errors.password?.message}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center justify-center gap-2">
                    <input type="checkbox" name="check" id="check" />
                    <p className="text-[#3A4264]">Keep me logged in</p>
                  </div>
                  <div className="">
                    <p className="text-[#234DF0] mr-3 cursor-pointer hover:underline">
                      Forgot password
                    </p>
                  </div>
                </div>
                <button
                  className="w-[27vw] h-[6vh] bg-[#234DF0] p-5 text-white flex items-center justify-center rounded-lg"
                  type="submit"
                >
                  Sign In
                </button>
                <p className="text-[#182467] mt-5">
                  Not registered yet?{" "}
                  <a href="/signup">
                    <span className="text-[#234DF0] font-semibold cursor-pointer hover:underline">
                      Create an Account
                    </span>
                  </a>
                </p>
              </form>
              {/* <DevTool control={control} /> */}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen bg-[#F5F7FD]">
          <Image
            src="/Login_img.svg"
            alt="Vercel Logo"
            className="w-[50vw] p-10"
            width={200}
            height={46}
            priority
          />
        </div>
      </div>
    </>
  )
}
