import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import MainHeader from "../../components/Header/MainHeader";
import MainSelect from "../../components/Selects/MainSelect";
import WhiteButton from "../../components/Buttons/WhiteButton";
import FooterSection from "../../components/Footer/FooterSection";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [selectedFont, setSelectedFont] = useState("Poppins");
  const [selectedTheme, setSelectedTheme] = useState("#212121");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isScaling, setIsScaling] = useState(false);

  const themeColors_example = [
    { label: "Azul Marinho", value: "#16202A" },
    { label: "Escuro", value: "#212121" },
    { label: "Claro", value: "#E8F1F2" },
  ];

  const fontNames_example = ["Arial", "Poppins", "Times New Roman", "Verdana"];
  const handleFontChange = (selectedOption) => {
    setSelectedFont(selectedOption.value);
  };
  const handleThemeChange = (selectedOption) => {
    setSelectedTheme(selectedOption.value);
    setIsLightMode(selectedOption.value === "#E8F1F2");
  };

  const initialText =
    "Hello World! Programmed to work and not to feel!!! Not even sure that this is real... Hello, world!";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showTyping, setShowTyping] = useState(true);

  const handleCardClick = () => {
    setDisplayText(displayText.slice(0, -3));
    setIsScaling(true);
    setTimeout(() => setIsScaling(false), 0);
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (displayText.length < initialText.length) {
        setIsTyping(true);
        setShowTyping(true);
        const randomInterval = Math.random() * 200 + 10;
        setTimeout(
          () =>
            setDisplayText(
              (prevText) => prevText + initialText.charAt(prevText.length)
            ),
          randomInterval
        );
      } else {
        setIsTyping(false);
      }
    }, Math.random() * 200 + 50);

    return () => clearInterval(typingInterval);
  }, [isTyping, displayText]);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        if (!isTyping) {
          setShowTyping(!showTyping);
        }
      }, 500);
    }
  }, [isTyping, showTyping]);

  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden bg-[#212121]">
      <MainHeader
        headerType="home"
        contentTopMargin={96}
        buttonMarginY={20}
        buttonWidth={320}
        buttonText="Comece agora"
        buttonRedirect="startNowSection"
        h1Text="Tweetify Labs"
        h2Text="Economize tempo enquanto aumenta a
qualidade de seus posts!"
      />
      <main className="flex justify-center items-center w-full">
        <main className="flex flex-col w-[1170px]">
          <section className="flex flex-col gap-y-16 py-16">
            <section className="flex flex-col gap-y-10">
              <h2 className="max-w-[600px]">
                Com poucos segundos, seu post estará pronto para ir aos ares!
              </h2>
              <section className="flex justify-between w-full gap-x-3">
                <div className="flex flex-col gap-y-4 w-[344px] h-[344px] rounded-[3rem] p-6 to-[#303030] from-[#16202A] bg-gradient-to-br hidden-1-shadow">
                  <h3>Adicione as informações do perfil e estilo de post</h3>
                  <div
                    className="flex gap-x-1 rounded-full pointer-events-none select-none hidden-1-shadow"
                    style={{ backgroundColor: selectedTheme }}
                  >
                    <img
                      className="w-20 h-20 rounded-full p-2"
                      src="/images/profiles/profile-gabriel-pic.jpg"
                      alt="Profile Pic"
                    />
                    <div className="flex flex-col h-full justify-center">
                      <h3
                        className={`${isLightMode && "text-black"} leading-tight`}
                        style={{ fontFamily: selectedFont }}
                      >
                        Gabriel Torres
                      </h3>
                      <p
                        className={`${isLightMode && "text-black"} leading-tight`}
                        style={{ fontFamily: selectedFont }}
                      >
                        @gabriel_torresr
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-x-5">
                    <div className="w-1/2">
                      <p>Fonte:</p>
                      <MainSelect
                        options={fontNames_example.map((font) => ({
                          value: font,
                          label: font,
                        }))}
                        value={selectedFont}
                        onChange={handleFontChange}
                      />
                    </div>
                    <div className="w-1/2">
                      <p>Tema:</p>
                      <MainSelect
                        options={themeColors_example.map((theme) => ({
                          value: theme.value,
                          label: theme.label,
                        }))}
                        value={selectedTheme}
                        onChange={handleThemeChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 w-[344px] h-[344px] rounded-[3rem] p-6 to-[#303030] from-[#16202A] bg-gradient-to-tl hidden-1-shadow">
                  <h3>
                    Insira páginas e seus conteúdos enquanto pré-visualiza o
                    resultado
                  </h3>
                  <div
                    onClick={handleCardClick}
                    className={`cursor-pointer rounded-[1.5rem] p-6 h-full hidden-1-shadow ${
                      isScaling
                        ? "scale-[103%]"
                        : "transition-transform duration-300 ease-in-out"
                    }`}
                    style={{ backgroundColor: selectedTheme }}
                  >
                    <h4
                      className={`${isLightMode && "text-black"} select-none`}
                      style={{ fontFamily: selectedFont }}
                    >
                      {displayText}
                      {showTyping && <span>|</span>}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 w-[344px] h-[344px] rounded-[3rem] p-6 to-[#303030] from-[#16202A] bg-gradient-to-tr hidden-1-shadow">
                  <h3>
                    Baixe o conteúdo e salve as pré-definições para as próximas
                    sessões
                  </h3>
                  <div className="h-full">
                    <div className="flex items-center justify-center w-full h-full">
                      <Link to="/workspace">
                        <WhiteButton text="Ir para Workspace" width={240} />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section
              id="headerRedirect"
              className="flex flex-col items-center gap-y-10"
            >
              <div className="flex flex-col items-center text-center gap-y-2">
                <h2>Vamos ao que interessa!</h2>
                <h3 className="max-w-[760px]">
                  Obrigado por acessar! Esperamos que aproveite esta ferramenta
                  gratuita. Feedbacks são sempre bem-vindos! O projeto possui
                  código aberto no GitHub.
                </h3>
              </div>
              <Link to="/workspace">
                <WhiteButton text="Ir para Workspace" width={400} height={50} />
              </Link>
            </section>
          </section>
        </main>
      </main>
      <FooterSection />
    </main>
  );
}
