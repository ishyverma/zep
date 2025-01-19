interface InputType {
    label: string;
    placeholder: string;
    type: string;
    onBlur?: (e: any) => void;
    ref?: any;
    isError?: boolean
}

export function Input({ label, placeholder, type, onBlur, ref, isError }: InputType) {
    return <div className="w-full">
        <label htmlFor={label} className="text-[#545C8E]">{label}</label><br />
        <input ref={ref} onBlur={onBlur} className={`flex gap-2 px-4 text-base w-full rounded-xl border-2 border-[#717171]/70 py-3 placeholder:text-[#868686] mt-1 outline-black selection:outline`} type={type} placeholder={placeholder} id={label} />
    </div>
}