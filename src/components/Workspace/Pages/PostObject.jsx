export default function PostObject({ postInfos, index, isDownloadingTime }) {
  return (
    <>
      <div
        key={index}
        id={`tweet-${index}`}
        className={`hidden-1-shadow w-[400px] h-[400px] flex flex-col p-10 gap-y-4 ${
          isDownloadingTime ? "scale-[4] absolute -top-10 -right-10" : "rounded-[3rem]"
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
      {isDownloadingTime && (
        <div
          key={`hidden-${index}`}
          id={`hidden-${index}`}
          className={`w-[400px] h-[400px] flex p-10 justify-center items-center rounded-[3rem]`}
          style={{
            backgroundColor: postInfos.general_theme.mainColor,
          }}
        />
      )}
    </>
  );
}
