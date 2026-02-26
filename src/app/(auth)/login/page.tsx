"use client"
import { loginAction } from "./loginAction";  

export default function Login() {
  return (
    <div className="flex justify-center w-full mt-40">
      <form action={loginAction} className="flex flex-col gap-8 w-96 p-6 bg-[#FFFFFF] rounded-xl shadow">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-[#262626]">Username :</label>
            <input name="username" type="text" placeholder="Enter the username"
            className="w-full h-10 text-sm text-[#404040] bg-[#F5F5F5] rounded-lg px-2" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-[#262626]">Password :</label>
            <input name="password" type="password" placeholder="Enter the password"
            className="w-full h-10 text-sm text-[#404040] bg-[#F5F5F5] rounded-lg px-2" required/>
          </div>
        </div>
        <button type="submit" className="w-full h-10 font-medium text-sm text-white bg-blue-600 rounded-lg cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}