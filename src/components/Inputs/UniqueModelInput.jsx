export default function UniqueModelInput({
    label,
    name,
    type,
    value,
    onChange,
    placeholder,
}) {
    return (
        <div className="flex flex-col w-fit gap-y-3">
            {label && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="flex items-center justify-between w-full h-full bg-[#212121] font-normal text-[1.125rem] rounded-md"
                placeholder={placeholder || ""}
            />
        </div>
    );
}
