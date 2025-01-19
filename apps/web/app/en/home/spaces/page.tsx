"use client";

import { Add } from "@/components/Add";
import { DashboardNavbar } from "@/components/DashboardNav";
import { Exit } from "@/components/Exit";
import { Left } from "@/components/Left";
import { MovingCard } from "@/components/MovingCard";
import { Right } from "@/components/Right";
import { Search } from "@/components/Search";

export default function Spaces() {
    return <div className="bg-white">
        <DashboardNavbar />
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
                            <button className="text-sm flex justify-center items-center bg-[#6758FF] text-white font-semibold rounded-lg py-[11px] px-6 gap-1">
                                <div>
                                    Create Space
                                </div>
                                <div>
                                    <Add />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div className="flex items-center justify-center mt-20">
            <img className="w-32" src="https://zep.us/images/light/spaceMe/empty_with_character.png" alt="" />
        </div>
        <div className="text-center text-sm mt-5 flex justify-center items-center">
            <span className="w-[400px]">
                You haven't created any Spaces. Create your own Space and invite your friends.
            </span>
        </div>
    </div>
}