import React from "react";

export default function ImageUploadInput({
  label,
  disabled,
  name,
  onChange,
  imagePreviewUrl,
  displayPreview
}) {
  return (
    <div className="flex flex-col w-fit gap-y-1">
      {label && (
        <label htmlFor={name} className="block text-white">
          {label}
        </label>
      )}
      <label
        htmlFor={name}
        className={`hidden-1-shadow flex items-center justify-start bg-[#212121] rounded-2xl gap-x-4 min-w-[242px] ${
          displayPreview && "rounded-r-3xl"
        } ${disabled ? "cursor-default" : "cursor-pointer"}`}
      >
        <div className="flex items-center justify-center bg-[#303030] w-[41px] h-[41px] rounded-2xl">
          <span className="text-white text-xl font-semibold">+</span>
          <input
            disabled={disabled ? true : false}
            id={name}
            type="file"
            name={name}
            onChange={onChange}
            accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
            className="hidden"
          />
        </div>
        <div className="relative flex-1">
          <p className="relative font-normal text-[1rem] text-white">
            {imagePreviewUrl && displayPreview
              ? "Foto carregada!"
              : disabled
              ? "Limite atingido."
              : "Envie uma foto"}
          </p>
        </div>
        {displayPreview && (
          <div className="flex-shrink-0">
            <img
              src={
                imagePreviewUrl && imagePreviewUrl !== ""
                  ? imagePreviewUrl
                  : "/images/profiles/default-profile.png"
              }
              alt="Pré-visualização da foto do perfil"
              className="rounded-full border-[#303030] border-[3px] h-10 w-10 object-cover"
            />
          </div>
        )}
      </label>
    </div>
  );
}
