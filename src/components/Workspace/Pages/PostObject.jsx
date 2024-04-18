export default function PostObject({ postInfos, index, isDownloadingTime }) {
  return (
    <div className="flex relative w-full h-full items-center justify-center">
      <div
        key={index}
        id={`tweet-${index}`}
        className={`flex flex-col hidden-1-shadow w-[400px] h-[400px] p-10 gap-y-4 ${
          typeof isDownloadingTime !== "undefined" ? "" : "rounded-[3rem]"
        }`}
        style={{
          backgroundColor: postInfos.general_theme.mainColor,
        }}
      >
        <div
          className="flex gap-x-1"
          style={{ backgroundColor: postInfos.general_theme.mainColor }}
        >
          <img
            className="w-20 h-20 rounded-full p-2"
            src={postInfos.user_photo}
            alt="Profile Pic"
          />
          <div className="flex flex-col h-full justify-center">
            <h3
              className={`${!postInfos.general_theme.darkMode && "text-black"}`}
              style={{
                fontFamily: postInfos.general_fontType,
                fontSize: `${postInfos.general_username_fontSize + 10}px`,
              }}
            >
              {postInfos.user_name}
            </h3>
            <p
              className={`${
                !postInfos.general_theme.darkMode && "text-black"
              } leading-tight`}
              style={{
                fontFamily: postInfos.general_fontType,
                fontSize: `${postInfos.general_username_fontSize}px`,
              }}
            >
              {postInfos.user_username}
            </p>
          </div>
        </div>
        <p
          style={{
            fontFamily: postInfos.general_fontType,
            fontSize: `${postInfos.general_username_fontSize + 10}px`,
          }}
        >
          {postInfos.pagesContent[index].title}
        </p>
      </div>
        {typeof isDownloadingTime !== "undefined" ? (
          <div className="flex justify-center items-center w-full h-full gap-x-10 absolute top-0 left-0 bg-yellow-700">
            <p>Baixando...</p>
          </div>
        ) : null}
    </div>
  );
}
