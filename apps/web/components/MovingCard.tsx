interface MovingCardType {
    image: string;
}

export function MovingCard({ image }: MovingCardType) {
    return <div>    
        <div className="">
            <img className="w-[500px] relative h-56 rounded-xl cursor-pointer" src={image} alt="" />
            <div className="absolute top-32 text-white ml-20 text-xs font-semibold backdrop-blur-sm bg-white/30 px-1 py-1 rounded-3xl">
                Official
            </div>
            <div className="absolute top-32 text-white ml-8 text-xs font-semibold backdrop-blur-sm bg-white/30 px-1 py-1 rounded-3xl">
                Game
            </div>
        </div>
    </div>
}