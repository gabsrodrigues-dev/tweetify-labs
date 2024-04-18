// Importações necessárias
import React from "react";
import GeneralTextArea from "../../Inputs/GeneralTextArea";
import MainSelect from "../../Selects/MainSelect";
import ImageUploadInput from "../../Inputs/ImageUploadInput";
import { HiArrowDownTray, HiMiniXMark } from "react-icons/hi2";
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
  return (
    <div className="flex flex-col gap-y-5">
      {postInfos.pagesContent.map((page, index) => (
        <div key={index} className="flex flex-col gap-y-10">
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
              )}
              {(page.type === "theme-and-content" ||
                page.type === "content-and-image") && (
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
              )}
              {page.type === "content-and-image" && (
                <>
                  <ImageUploadInput
                    label="Adicione as imagens (máx. 4)"
                    onChange={handlePostImagesChange}
                    name={`post-images-${index}`}
                    disabled={page.images.length >= 4}
                  />
                  {page.images.length > 0 && (
                    <div className="flex gap-x-5">
                      {page.images.map((image) => (
                        <div className="relative" key={image.id}>
                          <img
                            className="hidden-1-shadow w-[11.7rem] h-[9rem] object-cover bg-[#212121] rounded-2xl brightness-75"
                            src={image.base64Content}
                            alt="Uploaded content"
                          />
                          <button
                            className="absolute top-0 right-0 p-1 mt-2 mr-2 rounded-full bg-[#30303091] text-[#ffffff] hover:text-[#ffbdbd] transition-all duration-300 ease-in-out"
                            onClick={() => handleRemovePostImage(image.id)}
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
                index={index}
                postInfos={postInfos}
                isDownloadingTime={isDownloadingTime}
              />
              <AddNewButton
                icon={<HiArrowDownTray className="text-base" />}
                onClick={() => handleDownloadImage(index)}
                text="Download"
              />
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#303030]" />
        </div>
      ))}
    </div>
  );
};

export default PageList;
