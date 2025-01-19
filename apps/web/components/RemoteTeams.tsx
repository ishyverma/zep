import { RemoteCard } from "./RemoteCard";

export function RemoteTeam() {
    return <div className="mt-14 flex items-center pb-16 justify-center bg-gradient-to-b from-[#202545] to-[#373AA1]">
        <div className="lg:w-[60vw]">
            <div className="flex justify-center items-center">
                <div className="text-white text-3xl sm:text-5xl font-semibold mt-16 text-center w-[75%]">
                    <span>Everything remote teams need to get work done</span>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <RemoteCard />
            </div>
        </div>
    </div>
}