interface CardElementType {
    picture: string;
    label: string;
}

export function CardElement({ picture, label }: CardElementType) { 
    return <div className="flex gap-4 p-4 items-center">
        <div className="bg-white rounded-full p-3">
            <img width={20} src={picture} alt="" />
        </div>
        <div className="text-white sm:w-auto w-[50%] sm:text-[15px] text-[12px] font-semibold">
            {label}
        </div>
    </div>
}