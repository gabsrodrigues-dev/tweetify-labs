import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import MainHeader from "../../components/Header/MainHeader";
import AddNewButton from "../../components/Buttons/AddNewButton";
import FooterSection from "../../components/Footer/FooterSection";
import { Link } from "react-router-dom";
import { HiMiniCheck } from "react-icons/hi2";
import UniqueModelInput from "../../components/Inputs/UniqueModelInput";
import PostInfos from "../../components/Workspace/PostInfos/PostInfos";
import MainSelect from "../../components/Selects/MainSelect";
import GeneralTextArea from "../../components/Inputs/GeneralTextArea";
import ImageUploadInput from "../../components/Inputs/ImageUploadInput";
import { HiMiniXMark } from "react-icons/hi2";
import PageList from "../../components/Workspace/Pages/PageList";
import html2canvas from "html2canvas";

export default function WorkspacePage() {
  const [isDownloadingTime, setIsDownloadingTime] = useState(undefined);
  const themeOptions = [
    {
      name: "Azul Marinho",
      alias: "twitter-blue",
      mainColor: "#16202A",
      secondaryColor: "#0E141B",
      darkMode: true,
    },
    {
      name: "Escuro",
      alias: "dark",
      mainColor: "#212121",
      secondaryColor: "#141414",
      darkMode: true,
    },
    {
      name: "Claro",
      alias: "white",
      mainColor: "#E8F1F2",
      secondaryColor: "#B1D0D3",
      darkMode: false,
    },
  ];
  const fontNames = ["Arial", "Poppins", "Times New Roman", "Verdana"];
  const fontSizes_username = Array.from({ length: 6 }, (_, i) => i * 2 + 12);
  const fontSizes_text = Array.from({ length: 6 }, (_, i) => i * 2 + 18);
  const fontSizes_title = Array.from({ length: 6 }, (_, i) => i * 2 + 24);
  const tweetsType = [
    { label: "Título", value: "just-title" },
    { label: "Tema e Conteúdo", value: "theme-and-content" },
    { label: "Conteúdo e Imagem", value: "content-and-image" },
  ];

  const [availableModels, setAvailableModels] = useState([]);
  const [postInfos, setPostInfos] = useState({
    pagesQuantity: 1,
    pagesContent: [
      {
        id: 0,
        type: tweetsType[0].value,
        title: `Resumo Tech de hoje
        27/02/2024`,
        theme: "",
        content: "",
        images: [
          // {
          //   id: 0,
          //   base64Content: "",
          // }
        ],
      },
    ],
    user_name: "Thiago Lima",
    user_username: "@thiagolima.tech",
    user_photo: "/temp.jpg",
    general_fontType: fontNames[0],
    general_title_fontSize: 32,
    general_text_fontSize: 26,
    general_username_fontSize: 20,
    general_theme: themeOptions[0],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setAvailableModels([
      {
        id: 1,
        name: "Sem nome (1)",
        select: false,
      },
      {
        id: 2,
        name: "Sem nome (2)",
        select: true,
      },
    ]);
  }, []);

  const handleChangeModelName = (e) => {
    const { name, value } = e.target;
    setAvailableModels((prevModels) =>
      prevModels.map((model) =>
        model.id === parseInt(name) ? { ...model, name: value } : model
      )
    );
  };

  const handleFontChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_fontType: selectedOption.value,
    }));
  };

  const handleTitleFontSizeChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_title_fontSize: selectedOption.value,
    }));
  };

  const handleTextFontSizeChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_text_fontSize: selectedOption.value,
    }));
  };

  const handleUsernameFontSizeChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_username_fontSize: selectedOption.value,
    }));
  };

  const handleChangeModelActive = (e) => {
    const { name } = e.target;
    setAvailableModels((prevModels) =>
      prevModels.map((model) =>
        model.id === parseInt(name)
          ? { ...model, select: true }
          : { ...model, select: false }
      )
    );
  };

  const handleChangeThemeActive = (alias) => {
    console.log(themeOptions.find((theme) => theme.alias === alias));
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_theme: themeOptions.find((theme) => theme.alias === alias),
    }));
  };

  const handleChangePostInfos = (e) => {
    const { name, value } = e.target;
    setPostInfos((prevInfos) => ({ ...prevInfos, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onloadend = () => {
      setPostInfos({
        ...postInfos,
        user_photo: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handlePostImagesChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    let reader = new FileReader();
    reader.onloadend = () => {
      setPostInfos((prevInfos) => ({
        ...prevInfos,
        pagesContent: prevInfos.pagesContent.map((page) =>
          page.id === 0
            ? {
                ...page,
                images: [
                  ...page.images,
                  {
                    id: page.images.length,
                    base64Content: reader.result,
                  },
                ],
              }
            : page
        ),
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleRemovePostImage = (imageIdToRemove) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      pagesContent: prevInfos.pagesContent.map((page, pageIndex) => {
        if (page.id === 0) {
          return {
            ...page,
            images: page.images.filter((image) => image.id !== imageIdToRemove),
          };
        }
        return page;
      }),
    }));
  };

  const handleAddNewPage = () => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      pagesQuantity: prevInfos.pagesQuantity + 1,
      pagesContent: [
        ...prevInfos.pagesContent,
        {
          id: prevInfos.pagesContent.length,
          type: tweetsType[0].value,
          title: "",
          theme: "",
          content: "",
          images: [],
        },
      ],
    }));
  };

  const handleRemovePage = (pageIdToRemove) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      pagesQuantity: prevInfos.pagesQuantity - 1,
      pagesContent: prevInfos.pagesContent.filter(
        (page) => page.id !== pageIdToRemove
      ),
    }));
  };

  const handleDownloadImage = (pageIndex) => {
    setIsDownloadingTime(pageIndex);
    setTimeout(() => {
      try {
        html2canvas(document.getElementById(`tweet-${pageIndex}`), {
          scale: 4.8,
        })
          .then((canvas) => {
            const ctx = canvas.getContext("2d");
            const imageData = ctx.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );
            const newCanvas = document.createElement("canvas");
            newCanvas.width = 1920;
            newCanvas.height = 1920;
            const newCtx = newCanvas.getContext("2d");
            newCtx.putImageData(imageData, 0, 0);
            let a = document.createElement("a");
            a.href = newCanvas.toDataURL("image/png");
            a.download = "tweet.png";
            a.click();
          })
          .catch((err) => {
            Toastify("Ocorreu um erro ao tentar baixar a imagem.", "error");
          });
      } catch (err) {
        Toastify(
          "Ocorreu um erro ao envolver com operações de imagem.", "error"
        );
      } finally {
        setIsDownloadingTime(undefined);
      }
    }, 1000);
  };

  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden bg-[#212121]">
      <MainHeader
        headerType="workspace"
        contentTopMargin={76}
        buttonMarginY={20}
        buttonWidth={250}
        buttonText="Criar novo modelo"
        buttonRedirect="startNowSection"
        h1Text="</Workspace/>"
        h2Text="Sem predefinições existentes."
      />
      <main className="flex justify-center items-center w-full">
        <main className="flex flex-col w-[1170px]">
          <section className="flex flex-col gap-y-16 py-16">
            {/* First Section */}
            <section className="grid grid-cols-2 gap-x-10 w-full">
              <div className="flex flex-col gap-y-5">
                {/* ModelList */}
                <h2>Seus Modelos</h2>
                <div className="w-full p-6 rounded-[3rem] bg-[#282828] hidden-1-shadow">
                  <div className="flex flex-col gap-y-5">
                    {availableModels.map((model) => (
                      <button
                        onClick={handleChangeModelActive}
                        name={model.id}
                        key={model.id}
                        className="flex justify-between items-center w-full gap-x-4 p-4 rounded-[1.5rem] bg-[#212121] hidden-1-shadow"
                      >
                        <UniqueModelInput
                          placeholder="Nome do modelo"
                          type="text"
                          name={model.id}
                          onChange={handleChangeModelName}
                          value={model.name}
                        />
                        <div className="flex justify-center items-center rounded-full min-w-7 min-h-7 bg-[#282828]">
                          <span
                            className={`flex items-center justify-center transition-all duration-300 min-w-7 min-h-7 rounded-full overflow-hidden ${
                              model.select ? "bg-[#16202A]" : "bg-[#282828]"
                            }`}
                          >
                            <HiMiniCheck
                              className={`transition-all text-lg ease-in-out duration-300 ${
                                !model.select && "opacity-0 translate-y-6"
                              }`}
                            />
                          </span>
                        </div>
                      </button>
                    ))}
                    <div className="flex justify-center items-center w-full">
                      <AddNewButton text="Criar novo modelo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                {/* ChooseTheme */}
                <h2>Escolha um tema</h2>
                <div className="w-full p-6 rounded-[3rem] bg-[#282828] hidden-1-shadow">
                  <div className="grid grid-cols-8 gap-5">
                    {themeOptions.length > 0 &&
                      themeOptions.map((theme) => (
                        <button
                          name={theme.alias}
                          key={theme.alias}
                          onClick={() => handleChangeThemeActive(theme.alias)}
                          className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
                            postInfos.general_theme.alias === theme.alias
                              ? "hidden-1-shadow-selected"
                              : "hidden-1-shadow"
                          }`}
                          style={{ backgroundColor: theme.secondaryColor }}
                        >
                          <div
                            className="w-1/2 h-full"
                            style={{ backgroundColor: theme.mainColor }}
                          />
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Second Section */}
            <section className="flex flex-col w-full p-12 gap-y-10 bg-[#1E1E1E] rounded-[3rem] hidden-1-shadow">
              {/* Set Infos Form */}
              <PostInfos
                postInfos={postInfos}
                handleChangePostInfos={handleChangePostInfos}
                handleFontChange={handleFontChange}
                handleTitleFontSizeChange={handleTitleFontSizeChange}
                handleTextFontSizeChange={handleTextFontSizeChange}
                handleUsernameFontSizeChange={handleUsernameFontSizeChange}
                handleImageChange={handleImageChange}
                fontNames={fontNames}
                fontSizes_title={fontSizes_title}
                fontSizes_username={fontSizes_username}
                fontSizes_text={fontSizes_text}
              />

              <div className="w-full h-[2px] bg-[#303030]" />

              {/* List Pages */}
              <PageList
                postInfos={postInfos}
                pagesContent={postInfos.pagesContent}
                tweetsType={tweetsType}
                setPostInfos={setPostInfos}
                handlePostImagesChange={handlePostImagesChange}
                handleRemovePostImage={handleRemovePostImage}
                handleDownloadImage={handleDownloadImage}
                isDownloadingTime={isDownloadingTime}
              />
              <div className="flex justify-center items-center w-full gap-x-10">
                {postInfos.pagesContent.length > 1 && (
                  <AddNewButton
                    onClick={() =>
                      handleRemovePage(
                        postInfos.pagesContent[
                          postInfos.pagesContent.length - 1
                        ].id
                      )
                    }
                    text="Apagar última página"
                    lessButton
                  />
                )}
                <AddNewButton
                  onClick={handleAddNewPage}
                  text="Criar nova página"
                />
              </div>
            </section>
          </section>
        </main>
      </main>
      <FooterSection />
    </main>
  );
}
