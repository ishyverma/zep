interface ButtonType {
    variant: "primary" | "secondary" | "tertiary";
    label: string;
    isHover: boolean;
    className?: string;
}

export function Button({ variant, label, isHover, className }: ButtonType) {
    return <button className={`${variant === "primary" ? `bg-[#08D6A0] text-[#202543] ${isHover ? "hover:bg-[#5FE5C2]" : "" }` : variant === "secondary" ? "bg-[#EBEEFE] text-[#0E22A6]" : `bg-[#4357DC] text-white ${isHover ? "hover:bg-[#6978E0]" : ""}`} px-7 py-2 rounded-md transition-all duration-300 ${className} w-full`}>
        <span className="text-[14px] font-bold text-center">
            {label}
        </span>
    </button>
}