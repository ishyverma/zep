import axios from "axios"
import { useEffect, useState } from "react";
import { ThreeDots } from "./ThreeDots";
import { Bin } from "./Bin";
import { Thunder } from "./Thunder";

export function ExistingSpaces() {
    const [spaces, setSpaces] = useState<ExistingSpaces[]>()
    let token: string;
    const [isOpen, setIsOpen] = useState<any>({})
    const toggle = (id: number) => {
        setIsOpen({...isOpen, [id]: !isOpen[id]})
    }

    if(typeof window !== 'undefined'){
        token = localStorage.getItem("token") || ""
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/space/all", {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(response => {
            setSpaces(response.data.spaces)
        })
    }, [])

    if(!spaces) {
        return;
    }

    return <div className="grid grid-cols-4 mt-20 mb-40 gap-4">
        {spaces.map(space => <div key={space.id} className="mt-3">
            <img className="rounded-lg" width={330} src={space.thumbnail} alt="" />
            <div className="flex justify-center items-end flex-col">
                <div className="flex justify-between items-center mt-2 w-full">
                    <div className="text-base font-medium">{space.name}</div>
                    <div onClick={() => {
                        toggle(space.id)
                    }} className="cursor-pointer hover:bg-[#E9EAEF] px-[2px] py-[1px] rounded-md transition-all duration-75">
                        <ThreeDots />
                    </div>
                </div>
                <div className="flex justify-start w-full">
                    <div className="text-xs flex items-center justify-center gap-1 bg-[#F2F5F9] px-1 py-1 rounded-xl">
                        <div>
                            <Thunder />
                        </div>
                        <div className="font-semibold text-[#5D6065] mr-[2px]">
                            ENTERPRISE
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className={`text-sm -top-6 right-1 absolute w-[170px] border-[#E9EAEF] border px-4 py-3 ${isOpen[space.id] ? "flex" : "hidden"} justify-start items-center gap-2 hover:bg-[#E9EAEF] cursor-pointer rounded-lg`}>
                        <div className="text-red-600">
                            <Bin />
                        </div>
                        <div>
                            Delete From List
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
}

interface ExistingSpaces {
    id: number,
    name: string;
    dimensions: string;
    thumbnail: string;
}