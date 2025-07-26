// Importações necessárias
import React from "react";
import GeneralTextArea from "../../Inputs/GeneralTextArea";
import MainSelect from "../../Selects/MainSelect";
import ImageUploadInput from "../../Inputs/ImageUploadInput";
import { HiCloudArrowDown, HiMiniXMark } from "react-icons/hi2";
import PostObject from "./PostObject";
import AddNewButton from "../../Buttons/AddNewButton"

const PageList = ({
  postInfos,
  tweetsType,
  setPostInfos,
  handlePostImagesChange,
  handleRemovePostImage,
  handleDownloadImage,
  isDownloadingTime
}) => {
  
  const handlePostImageChange = (e, pageIndex) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPostInfos((prevInfos) => ({
        ...prevInfos,
        pagesContent: prevInfos.pagesContent.map((page, idx) =>
          idx === pageIndex
            ? {
                ...page,
                images: [
                  ...page.images,
                  {
                    id: Date.now() + Math.random(),
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

  const handleRemoveImage = (pageIndex, imageId) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      pagesContent: prevInfos.pagesContent.map((page, idx) =>
        idx === pageIndex
          ? {
              ...page,
              images: page.images.filter((img) => img.id !== imageId),
            }
          : page
      ),
    }));
  };

  return (
    <div className="flex flex-col gap-y-5">
      {postInfos.pagesContent.map((page, index) => (
        <div key={page.id} className="flex flex-col gap-y-10">
          <div className="grid grid-cols-[2fr_1.5fr] gap-x-5">
            <div className="w-full flex flex-col gap-y-5">
              <div className="w-full flex flex-col gap-y-1">
                <p>Tipo de tweet</p>
                <MainSelect
                  className="max-w-[234px]"
                  options={tweetsType.map((type) => ({
                    value: type.value,
                    label: type.label,
                  }))}
                  value={page.type}
                  onChange={(e) => {
                    const { value } = e;
                    setPostInfos((prevInfos) => ({
                      ...prevInfos,
                      pagesContent: prevInfos.pagesContent.map((p, pageIndex) =>
                        pageIndex === index ? { ...p, type: value } : p
                      ),
                    }));
                  }}
                />
              </div>

              {/* Campos baseados no tipo selecionado */}
              {page.type === "just-title" && (
                <GeneralTextArea
                  label="Conteúdo do título"
                  name="title"
                  value={page.title}
                  onChange={(e) => {
                    const { value } = e.target;
                    setPostInfos((prevInfos) => ({
                      ...prevInfos,
                      pagesContent: prevInfos.pagesContent.map(
                        (page, pageIndex) =>
                          pageIndex === index ? { ...page, title: value } : page
                      ),
                    }));
                  }}
                  placeholder="Adicione o conteúdo do título"
                />
              )}

              {page.type === "theme-and-content" && (
                <>
                  <GeneralTextArea
                    label="Conteúdo do tema (opcional)"
                    name="theme"
                    value={page.theme}
                    onChange={(e) => {
                      const { value } = e.target;
                      setPostInfos((prevInfos) => ({
                        ...prevInfos,
                        pagesContent: prevInfos.pagesContent.map(
                          (page, pageIndex) =>
                            pageIndex === index ? { ...page, theme: value } : page
                        ),
                      }));
                    }}
                    placeholder="Adicione o conteúdo do tema"
                  />
                  <GeneralTextArea
                    label="Conteúdo"
                    name="content"
                    value={page.content}
                    onChange={(e) => {
                      const { value } = e.target;
                      setPostInfos((prevInfos) => ({
                        ...prevInfos,
                        pagesContent: prevInfos.pagesContent.map(
                          (page, pageIndex) =>
                            pageIndex === index
                              ? { ...page, content: value }
                              : page
                        ),
                      }));
                    }}
                    placeholder="Adicione o conteúdo do tweet"
                  />
                </>
              )}

              {page.type === "content-and-image" && (
                <>
                  <GeneralTextArea
                    label="Conteúdo"
                    name="content"
                    value={page.content}
                    onChange={(e) => {
                      const { value } = e.target;
                      setPostInfos((prevInfos) => ({
                        ...prevInfos,
                        pagesContent: prevInfos.pagesContent.map(
                          (page, pageIndex) =>
                            pageIndex === index
                              ? { ...page, content: value }
                              : page
                        ),
                      }));
                    }}
                    placeholder="Adicione o conteúdo do tweet"
                  />
                  <ImageUploadInput
                    label="Adicione as imagens (máx. 4)"
                    onChange={(e) => handlePostImageChange(e, index)}
                    name={`post-images-${index}`}
                    disabled={page.images.length >= 4}
                  />
                  {page.images.length > 0 && (
                    <div className="flex gap-x-3 flex-wrap">
                      {page.images.map((image) => (
                        <div className="relative" key={image.id}>
                          <img
                            className="hidden-1-shadow object-cover bg-[#212121] rounded-2xl brightness-75"
                            src={image.base64Content}
                            alt="Uploaded content"
                            style={{
                              width: `${postInfos.general_imageWidth * 30}px`,
                              height: `${postInfos.general_imageHeight * 30}px`,
                              aspectRatio: `${postInfos.general_imageWidth}/${postInfos.general_imageHeight}`,
                            }}
                          />
                          <button
                            className="absolute top-0 right-0 p-1 mt-2 mr-2 rounded-full bg-[#30303091] text-[#ffffff] hover:text-[#ffbdbd] transition-all duration-300 ease-in-out"
                            onClick={() => handleRemoveImage(index, image.id)}
                          >
                            <HiMiniXMark className="text-lg" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex flex-col gap-y-5 justify-center items-center">
              <PostObject
                isDownloadingTime={isDownloadingTime}
                index={index}
                postInfos={postInfos}
              />
              <AddNewButton
                icon={<HiCloudArrowDown className="text-base" />}
                onClick={() => handleDownloadImage(index)}
                text={isDownloadingTime === index ? "Gerando..." : "Download"}
                disabled={isDownloadingTime === index}
              />
            </div>
          </div>
          {index < postInfos.pagesContent.length - 1 && (
            <div className="w-full h-[2px] bg-[#303030]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PageList;
