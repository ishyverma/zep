import { Button } from "./Button";
import { Circle } from "./Circle";
import { StoryCard } from "./StoryCard";

export function Stories() {
    return <div className="sm:pt-24 pt-14 flex justify-center items-center sm:pb-32 pb-20">
        <div className="w-[90vw]">
            <div className="text-center">
                <span className="text-3xl sm:text-5xl font-semibold text-[#282D4E]">Why distributed teams love Gather</span>
            </div>
            <div className="md:mt-14 mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
                <StoryCard photo="https://cdn.prod.website-files.com/640f99c52b298c7753381c38/6708042a6a2d38f901d9ab3a_carolina-kia-weme-headshot.jpeg" name="Carolina Kia" role="CEO at weme" image="https://cdn.prod.website-files.com/640f99c52b298c7753381c38/6708046c31b0ff3b190e92b1_weme-virtual-office.png" feedback="It's not only about having fun. It's about people feeling that they belong somewhere. And when people are happy, they stay at their company and deliver better results." link="Read Customer Story" />
                <div className="hidden md:flex">
                    <StoryCard photo="https://cdn.prod.website-files.com/640f99c52b298c7753381c38/6707e52de54e1c296a0ef863_daniel-tobon-profile.jpeg" name="Daniel Tobon" role="Founder & Tchnololgy Strategist at Tsquared Technologies" image="https://cdn.prod.website-files.com/640f99c52b298c7753381c38/671bb6eb14ee1ce0e7552c79_Daniel-Tobon-Feature-Card-2x.png" feedback={`One of the things we miss about being in an actual office is the casual chats—those quick "Hey, can I ask you something?" moments. Gather lets us do that virtually!`} link="View on LinkedIn" />
                </div>
                <div className="hidden lg:flex">
                    <StoryCard photo="https://cdn.prod.website-files.com/640f99c52b298c7753381c38/670563654a8f2ff57378abc3_Noe%20Horowitz.jpeg" name="Noé Horowitz" role="Director of Engineering at Guidance Analytics " image="https://cdn.prod.website-files.com/640f99c52b298c7753381c38/670563b8de85831fc86e1f4a_GuidanceTeam.png" feedback="Moving away from Zoom, where interactions were confined to scheduled sessions, has revolutionized our daily connections. Now, it's like walking through a real office." link="View on LinkedIn" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 gap-2">
                <div className="text-[#007AFE] cursor-pointer">
                    <Circle />
                </div>
                <div className="text-[#C6C4C3] cursor-pointer">
                    <Circle />
                </div>
                <div className="text-[#C6C4C3] cursor-pointer">
                    <Circle />
                </div>
                <div className="text-[#C6C4C3] cursor-pointer">
                    <Circle />
                </div>
                <div className="text-[#C6C4C3] cursor-pointer">
                    <Circle />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center mt-16 w-[300px]">
                    <Button className="py-[15px] w-20" variant="tertiary" isHover={true} label="View More Testimonials" />
                </div>
            </div>
            <div className="md:mt-40 mt-20 flex gap-10 items-center justify-center">
                <div>
                    <img width={150} src="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/6762ef5a8f6703733b901d85_g2-leader-winter-2025.png" alt="" />
                </div>
                <div>
                    <img width={150} src="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/6762ef5a9db70d11bb40bb0b_g2-relationship-winter-2025.png" alt="" />
                </div>
                <div>
                    <img width={150} src="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/6762ef5a4f16e904603e46f1_g2-results-winter-2025.png" alt="" />
                </div>
            </div>
        </div>
    </div>
}