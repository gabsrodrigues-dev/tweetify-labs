import { useRef } from "react";

export default function GeneralTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  // Ref para acessar o elemento textarea diretamente
  const textAreaRef = useRef(null);

  // Função para ajustar a altura do textarea
  const adjustHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "inherit"; // Reseta a altura para calcular corretamente
      // Calcula a altura necessária
      const computed = window.getComputedStyle(textArea);
      const height =
        textArea.scrollHeight +
        parseInt(computed.borderTopWidth, 10) +
        parseInt(computed.borderBottomWidth, 10);

      // Atualiza a altura dentro dos limites definidos
      textArea.style.height = `${Math.min(Math.max(height, 100), 500)}px`;
    }
  };

  return (
    <div className="flex flex-col w-[500px] gap-y-1">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="rounded-2xl overflow-hidden hidden-1-shadow">
        <textarea
          ref={textAreaRef}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e);
            adjustHeight();
          }}
          className="flex items-center w-full bg-[#212121] font-normal text-[1rem] rounded-2xl p-4 resize-none custom-scroll"
          placeholder={placeholder || ""}
          style={{ minHeight: "100px", maxHeight: "200px" }}
        />
      </div>
    </div>
  );
}
