export default function GeneralInput({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col w-fit gap-y-1">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="hidden-1-shadow flex items-center w-full h-full bg-[#212121] font-normal text-[1rem] rounded-2xl p-4 py-2"
        placeholder={placeholder || ""}
      />
    </div>
  );
}
