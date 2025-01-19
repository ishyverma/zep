import { useState } from "react";
import { DownArrow } from "./DownArrow";
import { UpArrow } from "./UpArrow";
import { Button } from "./Button";

export function AccordionMenu() {
    const [isHoveredFirst, setIsHoveredFirst] = useState<boolean>(false)
    const [isHoveredSecond, setIsHoveredSecond] = useState<boolean>(false)
    const [isHoveredThird, setIsHoveredThird] = useState<boolean>(false)
    return <div className="bg-white h-screen w-screen flex justify-center">
        <div className="w-[92vw] pt-5">
            <div onMouseEnter={() => {
                    setIsHoveredFirst(true)
                }} onMouseLeave={() => {
                    setIsHoveredFirst(false)
                }} className="flex justify-between items-center cursor-pointer">
                <div>
                    <span className="font-semibold">Product</span>
                </div>
                <div className="cursor-pointer">
                    {isHoveredFirst ? <UpArrow /> : <DownArrow />}
                </div>
            </div>
            <div onMouseEnter={() => {
                    setIsHoveredFirst(true)
                }} onMouseLeave={() => {
                    setIsHoveredFirst(false)
                }} className={`${isHoveredFirst ? "block pt-4" : "hidden"}`}>
                <div className="text-sm">
                    <div className="hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer">Features</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Integrations</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Privacy & Security</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Download</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">What's New</div>
                </div>
            </div>
            <div onMouseEnter={() => {
                    setIsHoveredSecond(true)
                }} onMouseLeave={() => {
                    setIsHoveredSecond(false)
                }} className="flex justify-between items-center cursor-pointer mt-6">
                <div>
                    <span className="font-semibold">Solutions</span>
                </div>
                <div className="cursor-pointer">
                    {isHoveredSecond ? <UpArrow /> : <DownArrow />}
                </div>
            </div>
            <div onMouseEnter={() => {
                    setIsHoveredSecond(true)
                }} onMouseLeave={() => {
                    setIsHoveredSecond(false)
                }} className={`${isHoveredSecond ? "block pt-4" : "hidden"}`}>
                <div className="text-sm">
                    <div className="hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer font-bold">For Remote Work</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Virtual Office</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Team Meetings</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Team Socials</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer font-bold">By Team</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Engineering Teams</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">People Teams</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Managers</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer font-bold">By Use Case</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Startups</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Conferences</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Education</div>
                </div>
            </div>
            <div className="flex justify-between items-center cursor-pointer mt-6">
                <div>
                    <span className="font-semibold">Pricing</span>
                </div>
            </div>
            <div onMouseEnter={() => {
                    setIsHoveredThird(true)
                }} onMouseLeave={() => {
                    setIsHoveredThird(false)
                }} className="flex justify-between items-center cursor-pointer mt-6">
                <div>
                    <span className="font-semibold">Resources</span>
                </div>
                <div className="cursor-pointer">
                    {isHoveredThird ? <UpArrow /> : <DownArrow />}
                </div>
            </div>
            <div onMouseEnter={() => {
                    setIsHoveredThird(true)
                }} onMouseLeave={() => {
                    setIsHoveredThird(false)
                }} className={`${isHoveredThird ? "block pt-4" : "hidden"}`}>
                <div className="text-sm">
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Gather Academy</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Customer Stories</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Blog</div>
                    <div className="mt-3 hover:bg-[#E1E1E1] py-3 px-3 rounded-lg cursor-pointer pl-6">Help Center</div>
                </div>
            </div>
            <div className="flex justify-between items-center cursor-pointer mt-6">
                <div>
                    <span className="font-semibold">Contact Sales</span>
                </div>
            </div>
            <div className="cursor-pointer mt-6 w-[100%]">
                <div>
                    <Button variant="primary" label="Get Started" isHover={true} />
                </div>
            </div>
            <div className="cursor-pointer mt-6">
                <div>
                    <Button variant="secondary" label="Sign In" isHover={true} />
                </div>
            </div>
        </div>
    </div>
}