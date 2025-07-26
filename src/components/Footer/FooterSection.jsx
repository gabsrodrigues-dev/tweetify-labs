import { useState } from "react";
import { HiOutlineUser, HiOutlineInbox } from "react-icons/hi";
import { Toastify } from "../Toastify/Toastify";

export default function FooterSection() {
  const [submittedForm, setSubmittedForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = {};
    for (const [key, value] of formData.entries()) {
      formDataObj[key] = value;
    }
    if (formDataObj.name === "" || formDataObj.email === "") {
      Toastify("Preencha todos os campos!", "error");
      return;
    }

    setSubmittedForm(true);
    setTimeout(() => setSubmittedForm(false), 2000);
    Toastify(
      `Formulário enviado! Dados: ${formDataObj.name} // ${formDataObj.email}`,
      "success"
    );
  };

  return (
    <footer className="flex w-full justify-center h-full from-[#212121] to-[#2f2f2f] bg-gradient-to-br">
      <div className="w-full max-w-[1170px] py-10">
        <div className="w-[180px] h-[4px] bg-white mb-5" />
        <div className="w-full flex gap-x-10">
          <div className="w-[60%] flex flex-col justify-between min-h-64">
            <div className="flex flex-col gap-y-5">
              <h2>
                Se inscreva para ficar por dentro das próximas atualizações e
                novidades.
              </h2>
              <h3 className="w-[70%]">
                Nós sabemos que você não vai se inscrever. Esse formulário
                sequer funciona? Teste e veremos.
              </h3>
            </div>
            <p>
              Desenvolvido por Gabriel Rodrigues.{" "}
              <span className="text-white/55 text-xs">
                Todos os direitos reservados.
              </span>
            </p>
          </div>
          <div className="w-[40%] flex flex-col min-h-64 justify-end items-end">
            <form
              className="w-[80%] flex flex-col gap-y-5"
              onSubmit={handleSubmit}
            >
              <div className="relative hidden-1-shadow">
                <HiOutlineUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-white/55" />
                <input
                  name="name"
                  type="text"
                  placeholder="Nome Completo"
                  className="h-[50px] w-full pl-10 pr-5 bg-[#212121] text-white placeholder:text-white/55"
                />
              </div>
              <div className="relative hidden-1-shadow">
                <HiOutlineInbox className="absolute top-1/2 transform -translate-y-1/2 left-3 text-white/55" />
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail de Contato"
                  className="h-[50px] w-full pl-10 pr-5 bg-[#212121] text-white placeholder:text-white/55"
                />
              </div>
              <button
                type="submit"
                className="relative w-full h-[50px] bg-[#212121] text-white hidden-1-shadow"
              >
                {submittedForm
                  ? "Lorem Ip... digo, formulário enviado."
                  : "Enviar Formulário"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
