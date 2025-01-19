import { Facebook } from "./Facebook";
import { Gather } from "./Gather";
import { Instagram } from "./Instagram";
import { LinkedIn } from "./LinkedIn";
import { Twitter } from "./Twitter";

export function Footer() {
    return <div className="flex justify-center items-center py-10 pb-20">
        <div className="sm:w-[85vw] w-[100vw]">
            <div className="bg-[#CCCCCC] h-[1px]"></div>
            <div className="flex flex-col-reverse lg:flex-row mt-20 justify-between lg:items-center items-start">
                <div className="mt-10 ml-5 md:ml-0 lg:mt-0">
                    <div className="w-32 cursor-pointer">
                        <Gather />
                    </div>
                    <div className="mt-6">
                        <span className="text-sm">© 2023 Gather Presence Inc.</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-sm cursor-pointer">Data Processing Agreement</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-sm cursor-pointer">Privacy Policy</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-sm cursor-pointer">Terms of Service</span>
                    </div>
                    <div className="flex gap-3 items-center mt-4">
                        <div className="w-6 cursor-pointer">
                            <LinkedIn />
                        </div>
                        <div className="w-6 cursor-pointer">
                            <Facebook />
                        </div>
                        <div className="w-6 cursor-pointer">
                            <Instagram />
                        </div>
                        <div className="w-6 cursor-pointer">
                            <Twitter />
                        </div>
                    </div>
                </div>
                <div className="w-[90vw] sm:w-auto mx-auto sm:mx-0 lg:mx-0">
                    <div className="flex justify-between sm:gap-10 gap-4">
                        <div>
                            <div>
                                <span className="font-bold sm:text-base text-sm">Product</span>
                            </div>
                            <div className="sm:text-sm text-xs">
                                <div className="sm:mt-4 mt-6 cursor-pointer">Features</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Templates</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Pricing</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Integrations</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Privacy & security</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">What's New</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="font-bold sm:text-base text-sm">Gather for</span>
                            </div>
                            <div className="sm:text-sm text-xs">
                                <div className="sm:mt-4 mt-6 cursor-pointer">Engineering teams</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">People teams</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Managers</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Startups</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Virtual conferences</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Education</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="font-bold sm:text-base text-sm">Remote work</span>
                            </div>
                            <div className="sm:text-sm text-xs">
                                <div className="sm:mt-4 mt-6 cursor-pointer">Virtual office</div>
                                <div className="sm:mt:-2 mt-4 cursor-pointer">Team meetings</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Team socials</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="font-bold sm:text-base text-sm">Resources</span>
                            </div>
                            <div className="sm:text-sm text-xs">
                                <div className="sm:mt-4 mt-6 cursor-pointer">Gather Academy</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Customer stories</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Testimonials</div>
                                <div className="sm:mt-2 cursor-pointer">Blog</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Help center</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Status</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="font-bold sm:text-base text-sm">Company</span>
                            </div>
                            <div className="sm:text-sm text-xs">
                                <div className="sm:mt-4 mt-6 cursor-pointer">About</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Careers</div>
                                <div className="sm:mt-2 mt-4 cursor-pointer">Contact us</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}