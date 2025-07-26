export default function AddNewButton({
  icon,
  text,
  marginY,
  lessButton,
  onClick,
}) {
  return (
    <button
      style={{
        marginTop: marginY ? `${marginY}px` : "0",
        marginBottom: marginY ? `${marginY}px` : "0",
      }}
      className="flex items-center group transition-all ease-in-out duration-300 hover:-translate-y-[2px] w-fit h-10 uppercase bg-[#212121] rounded-lg text-black hidden-1-shadow"
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-[#303030]">
        <span className="text-white text-xl font-semibold">
          {icon ? icon : lessButton ? "-" : "+"}
        </span>
      </div>
      <p className="relative flex items-center justify-center font-semibold text-base text-white px-4 pr-6 py-1.5">
        {text}
      </p>
    </button>
  );
}
