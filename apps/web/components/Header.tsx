"use client";

import { useState } from "react";
import { Button } from "./Button";
import { DownArrow } from "./DownArrow";
import { Gather } from "./Gather";
import { Menu } from "./Menu";
import { AccordionMenu } from "./AccordionMenu";
import { Cross } from "./Cross";
import { UpArrow } from "./UpArrow";
import { useRouter } from "next/navigation";

export function Header() {
    const [menu, setMenu] = useState<boolean>(false)
    const [color, setColor] = useState<boolean>(false)
    const [first, setFirst] = useState<boolean>(false)
    const [second, setSecond] = useState<boolean>(false)
    const [third, setThird] = useState<boolean>(false)
    const router = useRouter();
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
            console.log('hi there')
        } else {
            setColor(false)
        }
    }

    // Used to change the color of navbar when we scroll
    window.addEventListener('scroll', changeColor)

    return <div className="flex justify-center relative">
        <div className={`fixed top-0 flex justify-center ${color ? "bg-white" : ""} w-full transition-all duration-500`}>
            <div className="w-[90vw]">
                <div className="flex justify-between items-center">
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
                                }} className="font-medium relative cursor-pointer py-2">Product</div>
                                <div onMouseEnter={() => {
                                    setFirst(true)
                                }} onMouseLeave={() => {
                                    setFirst(false)
                                }} className={`absolute -ml-6 bg-white text-black text-base p-2 rounded-lg ${first ? "block" : "hidden"}`}>
                                    <div className="font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Features</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] transition-all duration-100 rounded-lg py-2 px-2">Integrations</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Privacy & Security</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Download</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">What's New</div>
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
                                }} className="font-medium relative cursor-pointer py-2">Solutions</div>
                                <div onMouseEnter={() => {
                                    setSecond(true)
                                }} onMouseLeave={() => {
                                    setSecond(false)
                                }} className={`absolute -ml-6 bg-white text-black text-base rounded-lg ${second ? "block" : "hidden"}`}>
                                    <div className="flex bg-[#D2D2D2] rounded-lg">
                                        <div>
                                            <div className="p-4 mr-10">For Remote Work</div>
                                            <div className="bg-black/30 h-[1px]"></div>
                                            <div className="bg-white p-2 w-[100%] mr-10 rounded-bl-lg">
                                                <div className="mt-5">Virtual Office</div>
                                                <div className="mt-5">Team Meetings</div>
                                                <div className="mt-5 mb-5">Team Socials</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="p-4 mr-10">By Team</div>
                                            <div className="bg-black/30 h-[1px]"></div>
                                            <div className="bg-white p-2 w-[100%] mr-10">
                                                <div className="mt-5">Engineering Teams</div>
                                                <div className="mt-5">People Teams</div>
                                                <div className="mt-5 mb-5">Managers</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="p-4 mr-10">By Use Case</div>
                                            <div className="bg-black/30 h-[1px]"></div>
                                            <div className="bg-white p-2 w-[100%] rounded-br-lg">
                                                <div className="mt-5">Startups</div>
                                                <div className="mt-5">Conferences</div>
                                                <div className="mt-5 mb-5">Education</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                {second ? <UpArrow /> : <DownArrow />}
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 cursor-pointer">
                            <div>
                                <span className="font-medium">Pricing</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 cursor-pointer">
                        <div onMouseEnter={() => {
                                    setThird(true)
                                }} onMouseLeave={() => {
                                    setThird(false)
                                }} className="font-medium relative cursor-pointer py-2">Resources</div>
                                <div onMouseEnter={() => {
                                    setThird(true)
                                }} onMouseLeave={() => {
                                    setThird(false)
                                }} className={`absolute -ml-6 bg-white text-black text-base p-2 rounded-lg top-16 ${third ? "block" : "hidden"}`}>
                                    <div className="font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Gather Academy</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] transition-all duration-100 rounded-lg py-2 px-2">Customer Stories</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Blog</div>
                                    <div className="mt-2 font-medium hover:bg-[#D2D2D2] rounded-lg py-2 px-2 transition-all duration-100">Help Center</div>
                                </div>
                            <div className="flex justify-center items-center">
                                {third ? <UpArrow /> : <DownArrow />}
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 cursor-pointer">
                            <div>
                                <span className="font-medium">Contact Sales</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <Button variant="primary" label="Get started" isHover={true} />
                            </div>
                            <div onClick={() => {
                                router.push("/signin")
                            }}>
                                <Button variant="secondary" label="Sign In" isHover={false} />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`bg-yellow-300 py-2 fixed top-20 w-full text-black ${color ? "flex" : "hidden"} justify-center items-center gap-4`}>
            <div>
                <span className="text-base font-medium">Startups get 2 months free.</span>
            </div>
            <div>
                <span className="underline text-base font-semibold cursor-pointer">Check eligibility</span>
            </div>
        </div>
        <div className={`${menu ? "flex" : "hidden"} lg:hidden flex absolute top-20`}>
            <AccordionMenu />
        </div>
    </div>
}