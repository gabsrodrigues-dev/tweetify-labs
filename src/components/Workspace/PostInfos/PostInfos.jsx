// PostInfos.js
import React from "react";
import GeneralInput from "../../../components/Inputs/GeneralInput";
import MainSelect from "../../../components/Selects/MainSelect";
import ImageUploadInput from "../../Inputs/ImageUploadInput";
import AddNewButton from "../../Buttons/AddNewButton";
import { HiCloudArrowDown, HiCloudArrowUp } from "react-icons/hi2";

const PostInfos = ({
  postInfos,
  handleChangePostInfos,
  handleFontChange,
  handleTitleFontSizeChange,
  handleTextFontSizeChange,
  handleUsernameFontSizeChange,
  handleImageChange,
  handleImageWidthChange,
  handleImageHeightChange,
  handleSaveState,
  handleLoadState,
  handleToggleFeature,
  fontNames,
  fontSizes_title,
  fontSizes_username,
  fontSizes_text,
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-10">
      <div className="flex flex-col gap-y-4">
        <h2>Informações do Perfil</h2>
        <div className="grid grid-cols-2 gap-x-5">
          <GeneralInput
            label="Nome do Usuário"
            type="text"
            name="user_name"
            value={postInfos.user_name}
            onChange={handleChangePostInfos}
            placeholder="User Name"
          />
          <ImageUploadInput
            label="Foto de perfil do Usuário"
            name="user_photo"
            onChange={handleImageChange}
            imagePreviewUrl={postInfos.user_photo}
            displayPreview
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <GeneralInput
            label="Username"
            type="text"
            name="user_username"
            value={postInfos.user_username}
            onChange={handleChangePostInfos}
            placeholder="@username_"
          />
          <div className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2>Informações Gerais</h2>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="w-full flex flex-col gap-y-1">
            <p>Fonte:</p>
            <MainSelect
              options={fontNames.map((font) => ({
                value: font,
                label: font,
              }))}
              value={fontNames.find(font => font === postInfos.general_fontType) ? 
                {value: postInfos.general_fontType, label: postInfos.general_fontType} : 
                {value: fontNames[0], label: fontNames[0]}
              }
              onChange={handleFontChange}
            />
          </div>
          <div className="w-full flex flex-col gap-y-1">
            <p>Tamanho da fonte: (Título)</p>
            <MainSelect
              options={fontSizes_title.map((size) => ({
                value: size,
                label: `${size}px`,
              }))}
              value={fontSizes_title.find(size => size === postInfos.general_title_fontSize) ? 
                {value: postInfos.general_title_fontSize, label: `${postInfos.general_title_fontSize}px`} : 
                {value: fontSizes_title[0], label: `${fontSizes_title[0]}px`}
              }
              onChange={handleTitleFontSizeChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="w-full flex flex-col gap-y-1">
            <p>Tamanho da fonte: (Username)</p>
            <MainSelect
              options={fontSizes_username.map((size) => ({
                value: size,
                label: `${size}px`,
              }))}
              value={fontSizes_username.find(size => size === postInfos.general_username_fontSize) ? 
                {value: postInfos.general_username_fontSize, label: `${postInfos.general_username_fontSize}px`} : 
                {value: fontSizes_username[0], label: `${fontSizes_username[0]}px`}
              }
              onChange={handleUsernameFontSizeChange}
            />
          </div>
          <div className="w-full flex flex-col gap-y-1">
            <p>Tamanho da fonte: (Texto)</p>
            <MainSelect
              options={fontSizes_text.map((size) => ({
                value: size,
                label: `${size}px`,
              }))}
              value={fontSizes_text.find(size => size === postInfos.general_text_fontSize) ? 
                {value: postInfos.general_text_fontSize, label: `${postInfos.general_text_fontSize}px`} : 
                {value: fontSizes_text[0], label: `${fontSizes_text[0]}px`}
              }
              onChange={handleTextFontSizeChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="w-full flex flex-col gap-y-1">
            <p>Escala da Imagem - Largura:</p>
            <GeneralInput
              label=""
              type="number"
              name="general_imageWidth"
              value={postInfos.general_imageWidth}
              onChange={handleImageWidthChange}
              placeholder="4"
              min="1"
              max="10"
            />
          </div>
          <div className="w-full flex flex-col gap-y-1">
            <p>Escala da Imagem - Altura:</p>
            <GeneralInput
              label=""
              type="number"
              name="general_imageHeight"
              value={postInfos.general_imageHeight}
              onChange={handleImageHeightChange}
              placeholder="5"
              min="1"
              max="10"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <h3 className="text-lg font-semibold">Features Opcionais</h3>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3">
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={postInfos.showPageNavigation}
                onChange={() => handleToggleFeature('showPageNavigation')}
                className="w-4 h-4"
              />
              <span>Mostrar navegação de páginas</span>
            </label>
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={postInfos.showReactions}
                onChange={() => handleToggleFeature('showReactions')}
                className="w-4 h-4"
              />
              <span>Mostrar reações (❤️ 💬 🔄)</span>
            </label>
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={postInfos.showTimestamp}
                onChange={() => handleToggleFeature('showTimestamp')}
                className="w-4 h-4"
              />
              <span>Mostrar timestamp</span>
            </label>
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={postInfos.showVerifiedBadge}
                onChange={() => handleToggleFeature('showVerifiedBadge')}
                className="w-4 h-4"
              />
              <span>Mostrar badge verificado ✓</span>
            </label>
          </div>
        </div>
        <div className="w-full flex gap-x-4">
          <AddNewButton
            icon={<HiCloudArrowDown className="text-base" />}
            onClick={handleSaveState}
            text="Salvar Estado"
          />
          <AddNewButton
            icon={<HiCloudArrowUp className="text-base" />}
            onClick={handleLoadState}
            text="Carregar Estado"
          />
        </div>
      </div>
    </div>
  );
};

export default PostInfos;
