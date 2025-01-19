import { Button } from "./Button";
import { RightArrow } from "./RightArrow";

export function Last() {
    return <div className="sm:my-20 mt-14 flex justify-center items-center">
        <div className="sm:w-[60vw] w-[90vw]">
            <div className="flex justify-center">
                <video className="rounded-3xl sm:w-[85%]" autoPlay muted playsInline loop src="https://cdn.vidzflow.com/v/MB29PHd9nF_1080p_1691443966.mp4"></video>
            </div>
            <div className="flex text-center justify-center sm:mt-16 mt-10">
                <span className="text-[#282D4E] font-bold sm:text-5xl text-3xl">Build a culture your remote team loves</span>
            </div>
            <div className="flex justify-center gap-6 items-center mt-8">
                <div>
                    <Button className="sm:py-[12px]" variant="tertiary" label="Get Started" isHover={true} />
                </div>
                <div className="flex text-[#4357DC] gap-2 cursor-pointer items-center justify-center">
                    <button className="font-bold text-[15px]">View Pricing</button>
                    <RightArrow />
                </div>
            </div>
        </div>
    </div>
}