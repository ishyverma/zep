interface EmojiType {
    label: string;
}

export function EmojiButton({ label }: EmojiType) {
    return <div>
        <div className="text-sm border hover:bg-[#F2F5F9] cursor-pointer border-[#E9EAEF] px-4 py-2 rounded-3xl">
            {label}
        </div>
    </div>
}
