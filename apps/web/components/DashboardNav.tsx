"use client";

interface InfoType {
    id: string;
    username: string;
    avatarId: null | string;
    type: "user" | "admin"
}

import { useState } from "react";
import { Button } from "./Button";
import { DownArrow } from "./DownArrow";
import { Gather } from "./Gather";
import { Menu } from "./Menu";
import { Cross } from "./Cross";
import { UpArrow } from "./UpArrow";
import { useRouter } from "next/navigation";
import { useInformation } from "@/hooks/useInformation";

export function DashboardNavbar() {
    const [menu, setMenu] = useState<boolean>(false)
    const [color, setColor] = useState<boolean>(true)
    const [first, setFirst] = useState<boolean>(false)
    const [second, setSecond] = useState<boolean>(false)
    let storage;
    if(typeof window !== 'undefined'){
        storage = localStorage.getItem("token")
    }
    const data = useInformation(storage || "") as InfoType
    const router = useRouter();
    return <div className="flex justify-center relative">
        <div className={`fixed top-0 flex justify-center w-full transition-all duration-500`}>
            <div className="w-[90vw]">
                <div className="flex justify-between items-center">
                    <div className="flex gap-10 items-center justify-between">
                        <div className={`${color ? "text-black" : "text-white"} w-20 h-20`}>
                            <Gather />
                        </div>
                        <div onClick={() => {
                            setMenu(prev => !prev)
                        }} className={`${color ? "text-black" : "text-white"} lg:hidden flex items-center cursor-pointer`}>
                                {menu ? <Cross /> : <Menu />}
                        </div>
                        <div className={`${color ? "text-black" : "text-white"} text-[14px] justify-center items-center gap-8 lg:flex hidden`}>
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <div>
                                    <div onMouseEnter={() => {
                                        setFirst(true)
                                    }} onMouseLeave={() => {
                                        setFirst(false)
                                    }} className="font-medium relative cursor-pointer py-2">About</div>
                                    <div onMouseEnter={() => {
                                        setFirst(true)
                                    }} onMouseLeave={() => {
                                        setFirst(false)
                                    }} className={`absolute -ml-6 bg-white text-black text-base p-2 rounded-lg ${first ? "block" : "hidden"} border border-black`}>
                                        <div className="font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Gather</div>
                                        <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Gather Quiz</div>
                                        <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Gather Office</div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    {first ? <UpArrow /> : <DownArrow />}
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <div>
                                    <div onMouseEnter={() => {
                                        setSecond(true)
                                    }} onMouseLeave={() => {
                                        setSecond(false)
                                    }} className="font-medium relative cursor-pointer py-2">Asset Store</div>
                                    <div onMouseEnter={() => {
                                        setSecond(true)
                                    }} onMouseLeave={() => {
                                        setSecond(false)
                                    }} className={`absolute -ml-6 bg-white text-black text-base p-2 rounded-lg ${second ? "block" : "hidden"} border border-black`}>
                                       <div className="font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Recommended</div>
                                        <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Apps</div>
                                        <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Maps</div>
                                        <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Mini-Games</div>
                                        <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Objects</div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    {second ? <UpArrow /> : <DownArrow />}
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <div>
                                    <span className="font-medium">Customer Support</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                            <div className="font-medium relative cursor-pointer py-2">Explore</div>
                            </div>
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <div>
                                    <span className="font-medium">Pricing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-black flex gap-2 justify-center items-center cursor-pointer">
                        <div>
                            {data.username}
                        </div>
                        <div>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}