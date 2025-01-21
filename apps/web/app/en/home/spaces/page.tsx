"use client";

import { Add } from "@/components/Add";
import { Cross } from "@/components/Cross";
import { DashboardNavbar } from "@/components/DashboardNav";
import { EmojiButton } from "@/components/EmojiButton";
import { ExistingSpaces } from "@/components/ExistingSpaces";
import { Exit } from "@/components/Exit";
import { Hammer } from "@/components/Hammer";
import { Left } from "@/components/Left";
import { MovingCard } from "@/components/MovingCard";
import { Right } from "@/components/Right";
import { Search } from "@/components/Search";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

export default function Spaces() {
    const inputRef = useRef<HTMLInputElement>(null)
    let token: string;
    const [maps, setMaps] = useState<dataType[] | null>()
    const [currLength, setCurrLength] = useState(0)
    const [currentMap, setCurrentMap] = useState<dataType>()
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/map/all", {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(response => {
            setMaps(response.data.maps)
        })
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const [isSecond, setIsSecond] = useState(false)
    const [value, setValue] = useState("")

    if(typeof window !== "undefined") {
        token = localStorage.getItem("token") ?? ""
        window.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                setIsOpen(false)
                setIsSecond(false)
            }
        })
    }

    if(!maps) {
        return
    }
    
    return <div>
        <div onClick={() => {
            if(isOpen) {
                setIsOpen(false)
            }
        }} className={`bg-white ${isOpen || isSecond ? "brightness-50 overflow-hidden": "brightness-100"} relative`}>
            <div className="z-50 relative">
                <DashboardNavbar />
            </div>
            <div className="flex justify-center items-center">
                <div className="mt-24 w-[90vw] flex gap-10">
                    <MovingCard image="https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/VSxoN3wK879tUU0gPKuAocC/4xWOc3wK87v393d0eb4d2c545d826ffca1c87ca2128tUU0hW3snObC/%EB%8F%99%EB%AC%BC%20%EC%88%A0%EB%9E%98%EC%9E%A1%EA%B8%B0.png" />
                    <MovingCard image="https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/bUAWw3wK876tUU2jXStdY2j/jERQO3wK87ud992c5a288b2b326fa5a56bb02cc63a1tUU2jZKbfKed/ZEP%20%EA%B2%B0%ED%88%AC%EC%9E%A5.png" />
                    <MovingCard image="https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/oQ3233wK879tUU0zaTpIvhZ/QZcZ03wK87u44bbc4ff3a59f36792cac5dfc78df0b0tUU0zcAnpkO0/ZEP%20%EB%8F%85%EC%84%9C%EC%8B%A4%20%EC%98%A4%ED%94%88!.png" />
                </div>
            </div>
            <div className="flex gap-1 justify-center items-center mt-2">
                <div className="border-[1px] p-[2px] cursor-pointer hover:bg-[#F2F5F9] border-black/20 rounded-full flex justify-center items-center">
                    <Left />
                </div>
                <div className="border-[1px] font-medium text-xs py-[5.2px] px-5 border-black/20 rounded-2xl flex justify-center items-center">
                    1/6
                </div>
                <div className="border-[1px] p-[2px] cursor-pointer hover:bg-[#F2F5F9] border-black/20 rounded-full flex justify-center items-center">
                    <Right />
                </div>
            </div>
            <div className="text-black flex justify-center items-center mt-8">
            <div className="w-[90vw]">
                    <div className="flex justify-between items-center">
                        <div className="font-bold">
                            My Spaces
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div>
                                <div className="absolute top-[402px] text-[#8C9096] ml-2 z-10">
                                    <Search />
                                </div>
                                <div className="relative">
                                    <input className="outline-none border-black/20 pr-2 pl-8 rounded-lg py-2 border" type="text" placeholder="Search My Spaces" />
                                </div>
                            </div>
                            <div>
                                <button className="text-sm flex justify-center items-center bg-[#E9E8FF] font-semibold text-[#6758FF] py-[11px] px-6 rounded-lg gap-1">
                                    <div>
                                        <Exit />
                                    </div>
                                    <div>
                                        Enter with Code
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button onClick={() => {
                                    setIsOpen(true)
                                }} className="text-sm flex justify-center items-center bg-[#6758FF] text-white font-semibold rounded-lg py-[11px] px-6 gap-1">
                                    <div>
                                        <Add />
                                    </div>
                                    <div>
                                        Create Space
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[90vw]">
                    <ExistingSpaces />
                </div>
            </div>
        </div>
        {isSecond && <div className="flex absolute w-[450px] top-52 left-[505px] rounded-xl bg-white opacity-100 justify-center items-center mx-auto z-20 shadow-2xl">
            <div className="w-[90%]">
                <div className="flex justify-between w-full items-center mt-3">
                    <div className="font-semibold">
                        Space Settings
                    </div>
                    <div onClick={() => {
                        setIsSecond(false)
                    }}>
                        <Cross />
                    </div>
                </div>
                <div className="my-7">
                    <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">
                            Space Name
                        </div>
                        <div className="text-xs font-medium">
                            {currLength}/30
                        </div>
                    </div>
                    <div className="mt-2">
                        <input value={value} ref={inputRef} onChange={() => {
                            if((inputRef.current?.value.length ?? 0) !== 31) {
                                setValue(inputRef.current?.value ?? "")
                                setCurrLength(inputRef.current?.value.length ?? 0)
                            }
                        }} type="text" placeholder="Enter Space name" className="border border-[#D5D9DF] w-full text-sm outline-[#6758FF] placeholder:text-[#8C9096] pl-2 rounded-lg py-2" />
                    </div>
                    <div className="mt-4 text-xs font-medium text-[#8C9096] text-center">
                        It may take up to 5 minutes.
                    </div>
                    <div className="mt-4">
                        <button onClick={() => {
                            axios.post("http://localhost:3000/api/v1/space", {
                                dimensions: currentMap?.dimensions,
                                name: inputRef.current?.value,
                                mapId: currentMap?.id,
                                thumbnail: currentMap?.thumbnail
                            }, {
                                headers: {
                                    authorization: `Bearer ${token}`
                                }
                            })
                        }} className={`text-center w-full ${currLength ? "bg-[#6758FF] cursor-pointer" : "bg-[#F3F2FF] cursor-not-allowed"} text-white text-sm font-bold border-[#D5D9DF]/50 border py-2 rounded-lg`}>Create</button>
                    </div>
                </div>
            </div>
        </div>}
        {isOpen && <div className="flex absolute top-5 left-64 rounded-xl opacity-100 justify-center items-center mx-auto z-20 shadow-2xl">
            <div className="flex h-[95vh] w-[65vw] bg-white text-black justify-center rounded-2xl">
                <div className="w-[95%]">
                    <div className="flex justify-between w-full mt-5">
                        <div className="font-semibold">
                            Select a Template
                        </div>
                        <div className="cursor-pointer" onClick={() => {
                            setIsOpen(false)
                        }}>
                            <Cross />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="font-semibold">
                            Official GATHER Maps
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <button className="text-[#7B7E82] bg-[#F2F5F9] border border-[#E9EAEF] font-semibold px-3 rounded-lg text-sm py-2">Asset Store</button>
                            </div>
                            <div>
                                <button className="flex gap-1 bg-[#F3F2FF] hover:bg-[#E9E8FF] border border-[#E9EAEF] text-sm font-semibold text-[#6758FF] px-3 py-2 rounded-lg items-center">
                                    <div><Hammer /></div>
                                    <div>Start with an Empty Map</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                        <div className="text-sm rounded-full bg-[#6758FF] text-white px-3 py-2">
                            All
                        </div>
                        <div>
                            <EmojiButton label="👩‍🏫 education" />
                        </div>
                        <div>
                            <EmojiButton label="🕵️‍♀️ quiz" />
                        </div>
                        <div>
                            <EmojiButton label="🎉 event" />
                        </div>
                        <div>
                            <EmojiButton label="🎮 mini-game" />
                        </div>
                        <div>
                            <EmojiButton label="🏢 office" />
                        </div>
                        <div>
                            <EmojiButton label="😆 gathering" />
                        </div>
                        <div>
                            <EmojiButton label="🌱 outdoors" />
                        </div>
                        <div>
                            <EmojiButton label="others" />
                        </div>
                    </div>
                    <div className="mt-4 gap-3 grid grid-cols-4">
                        {maps.map(m => <div key={m.id}>
                            <div className="overflow-hidden rounded-lg cursor-pointer">
                                <img onClick={() => {
                                    setIsSecond(true)
                                    setIsOpen(false)
                                    setCurrentMap(m)
                                }} width={240} className="rounded-lg hover:scale-110 transition-all duration-100" src={m.thumbnail} alt="" />
                            </div>
                            <div className="text-xs text-[#8C9096] font-semibold mt-2">
                                education
                            </div>
                            <div className="text-xs font-medium mt-1">
                                {m.name}
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div>
                <Toaster closeButton richColors position="bottom-right" />
            </div>
        </div>}
    </div>
}

interface dataType {
    id: string;
    name: string;
    dimensions: string;
    thumbnail: string;
}