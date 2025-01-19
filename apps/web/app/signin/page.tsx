"use client";

import { Button } from "@/components/Button";
import { Google } from "@/components/Google";
import { Input } from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

export default function Signin() {
    const username = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [UsernameError, setUsernameError] = useState<boolean>(false)
    const [PasswordError, setPasswordError] = useState<boolean>(false)
    const router = useRouter();

    async function sendSigninRequest() {
        const response = await axios.post("http://localhost:3000/api/v1/signin", {
            
        })
    }

    return <div className="bg-[#5B6DE1] h-screen w-screen flex justify-center items-center">
        <div className="bg-white py-5 px-8 rounded-3xl shadow-2xl w-[400px]">
            <div className="flex gap-10 justify-center items-center">
                <div>
                    <img width={45} src="https://cdn.gather.town/v0/b/gather-town.appspot.com/o/images%2Favatars%2Favatar_68_dancing.png?alt=media&token=6dd73945-7896-4121-bfba-ea359680d9be" alt="" />
                </div>
                <div>
                    <img width={45} src="https://cdn.gather.town/v0/b/gather-town.appspot.com/o/images%2Favatars%2Favatar_60_dancing.png?alt=media&token=ad303264-fb54-4f7f-a423-8d35a9832e60" alt="" />
                </div>
                <div>
                    <img width={45} src="https://cdn.gather.town/v0/b/gather-town.appspot.com/o/images%2Favatars%2Favatar_61_dancing.png?alt=media&token=63805b99-c7d4-4efe-a7e4-f7d6bbda393b" alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-4">
                <span className="text-lg font-semibold text-[#282D4E]">Welcome Back to Gather</span>
            </div>
            <button onClick={() => {
                toast.error('Cannot Signin with Google')
            }} className="flex gap-2 w-full rounded-xl justify-center group hover:border-[#696C83] items-center border-2 border-black py-3 mt-4">
                <div className="flex w-5">
                    <Google />
                </div>      
                <div className="group-hover:text-[#696C83] text-sm font-medium">Sign in with Google</div>
            </button>
            <div className="flex justify-center items-center mt-2">
                <span className="text-[#717171]">OR</span>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Input onBlur={(e) => {
                    username.current = e.target
                }} ref={username} placeholder="Enter your username" type="text" label="Username" />
            </div>
            <div className={`${UsernameError ? "flex" : "hidden"} justify-center items-center mt-2`}>
                <small className={`text-red-600 font-medium`}>Please enter a valid username.</small>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Input onBlur={(e) => {
                    password.current = e.target
                }} ref={password} placeholder="Enter your password" type="password" label="Password" />
            </div>
            <div className={`${PasswordError ? "flex" : "hidden"} justify-center items-center mt-2`}>
                <small className={`text-red-600 font-medium`}>Please enter a valid password.</small>
            </div>
            <div className="mt-6">
                <Button onClick={() => {
                    if(username.current?.value === ""){
                        if(password.current?.value === "") {
                            setPasswordError(true)
                        } else setPasswordError(false)
                        setUsernameError(true)
                    } 
                    else {
                        if(username.current?.value === "") {
                            setUsernameError(true)
                            if(password.current?.value === "") {
                                setPasswordError(true)
                            } else {
                                setPasswordError(false)
                            }
                        } else if (password.current?.value === "") {
                            setPasswordError(true)
                            if(username.current?.value === "") {
                                setUsernameError(true)
                            } else {
                                setUsernameError(false)
                            }
                        } else {
                            setUsernameError(false) 
                            setPasswordError(false)
                        }
                    }
                }} className="py-3 rounded-xl" isHover={true} label="Sign in with username" variant="primary" />
            </div>
            <div className="flex justify-center items-center mt-4">
                <span onClick={() => {
                router.push("/signup")
            }} className="text-[#4357D7] cursor-pointer text-sm font-semibold">Don't have an account? <span className="underline">Sign Up</span></span>
            </div>
        </div>
        <Toaster closeButton richColors position="bottom-right" />
    </div>
}
