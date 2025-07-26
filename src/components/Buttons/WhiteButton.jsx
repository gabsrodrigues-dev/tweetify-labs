import { HiArrowRight } from "react-icons/hi2";

export default function WhiteButton({ text, marginY, width, height, onClick }) {
  return (
    <button
      style={{
        height: height ? `${height}px` : "auto",
        width: width ? `${width}px` : "100%",
        marginTop: marginY ? `${marginY}px` : "0",
        marginBottom: marginY ? `${marginY}px` : "0",
      }}
      className="group transition-all ease-in-out duration-300 hover:-translate-y-[2px] uppercase py-1.5 bg-white rounded-full text-black hidden-1-shadow"
      onClick={onClick}
    >
      <p className="relative flex items-center justify-center font-semibold text-black transition-all ease-in-out duration-300">
        {text}
        <div className="w-0 transition-all ease-in-out duration-300 group-hover:w-3">
          <HiArrowRight className="opacity-0 min-w-3 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:ml-3" />
        </div>
      </p>
    </button>
  );
}
