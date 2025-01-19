interface StoryCard {
    name: string;
    role: string;
    image: string;
    feedback: string;
    link: string;
    photo: string;
}

export function StoryCard({ name, role, image, feedback, link, photo }: StoryCard) {
    return <div className="border border-[#282D4E] border-opacity-50 rounded-2xl py-10">
        <div className="flex gap-4 px-6 items-center">
            <div>
                <img src={photo} width={50} className="rounded-full" alt="" />
            </div>
            <div>
                <div>
                    <span className="text-md font-bold">{name}</span>
                </div>
                <div>
                    <span className="text-sm">{role}</span>
                </div>
            </div>
        </div>
        <div className="mt-10">
            <img className="h-96" src={image} alt="" />
        </div>
        <div>
            <div className="px-2 mt-3 flex">
                <div>
                    <img className="w-[100%]" src="https://cdn.prod.website-files.com/63c885e8fb810536398b658a/643d8a048430f3298b762eb3_Quotation%20mark.svg" alt="" />
                </div>
                <div className="mt-2 -ml-1">
                    <span>{feedback}</span>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <span className="text-[#4357D7] text-sm font-medium ml-6 cursor-pointer">{link}</span>
        </div>
    </div>
}