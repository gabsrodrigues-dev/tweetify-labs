import { HiHeart, HiChatBubbleOvalLeft, HiArrowPath, HiChevronRight } from "react-icons/hi2";

export default function PostObject({ postInfos, index, isDownloadingTime }) {
  const currentPage = postInfos.pagesContent[index];
  const totalPages = postInfos.pagesContent.length;
  const currentPageNumber = index + 1;
  
  // Função para processar texto com tags <b> e <u>
  const processTextWithBold = (text) => {
    if (!text) return "";
    // Escapar caracteres perigosos, mas manter <b>, </b>, <u> e </u>
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/&lt;b&gt;/g, "<b>")
      .replace(/&lt;\/b&gt;/g, "</b>")
      .replace(/&lt;u&gt;/g, "<u>")
      .replace(/&lt;\/u&gt;/g, "</u>")
      .replace(/\n/g, "<br/>");
  };
  
  return (
    <div className="flex relative w-full h-full items-center justify-center">
      <div
        key={index}
        id={`tweet-${index}`}
        className={`flex flex-col hidden-1-shadow w-[400px] h-[400px] p-6 gap-y-3 ${
          typeof isDownloadingTime !== "undefined" ? "" : "rounded-[3rem]"
        }`}
        style={{
          backgroundColor: postInfos.general_theme.mainColor,
        }}
      >
        {/* Header com foto e info do usuário */}
        <div className="flex gap-x-3 items-start">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={postInfos.user_photo}
            alt="Profile Pic"
          />
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-x-1">
              <h3
                className={`font-bold leading-tight ${
                  !postInfos.general_theme.darkMode ? "text-black" : "text-white"
                }`}
                style={{
                  fontFamily: postInfos.general_fontType,
                  fontSize: `${postInfos.general_username_fontSize + 3}px`,
                  lineHeight: '1.2',
                }}
              >
                {postInfos.user_name}
              </h3>
              {postInfos.showVerifiedBadge && (
                <span className="text-blue-500 text-sm">✓</span>
              )}
            </div>
            <p
              className={`leading-tight opacity-70 ${
                !postInfos.general_theme.darkMode ? "text-black" : "text-white"
              }`}
              style={{
                fontFamily: postInfos.general_fontType,
                fontSize: `${postInfos.general_username_fontSize - 2}px`,
                lineHeight: '1.2',
              }}
            >
              {postInfos.user_username}
            </p>
            {postInfos.showTimestamp && (
              <p
                className={`leading-tight opacity-50 text-xs ${
                  !postInfos.general_theme.darkMode ? "text-black" : "text-white"
                }`}
              >
                {new Date().toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })} · {new Date().toLocaleDateString('pt-BR')}
              </p>
            )}
          </div>
        </div>

        {/* Conteúdo do post baseado no tipo */}
        <div className="flex flex-col gap-y-2 flex-1">
          {/* Tipo: Apenas título */}
          {currentPage.type === "just-title" && (
            <div className="flex-1 flex items-center">
              <h2
                className={`font-bold leading-snug ${
                  !postInfos.general_theme.darkMode ? "text-black" : "text-white"
                }`}
                style={{
                  fontFamily: postInfos.general_fontType,
                  fontSize: `${postInfos.general_title_fontSize}px`,
                  lineHeight: '1.3',
                }}
                dangerouslySetInnerHTML={{
                  __html: processTextWithBold(currentPage.title)
                }}
              />
            </div>
          )}

          {/* Tipo: Tema e Conteúdo */}
          {currentPage.type === "theme-and-content" && (
            <div className="flex flex-col gap-y-2 flex-1">
              {currentPage.theme && (
                <h3
                  className={`font-semibold leading-snug ${
                    !postInfos.general_theme.darkMode ? "text-black" : "text-white"
                  }`}
                  style={{
                    fontFamily: postInfos.general_fontType,
                    fontSize: `${postInfos.general_title_fontSize - 4}px`,
                    lineHeight: '1.3',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: processTextWithBold(currentPage.theme)
                  }}
                />
              )}
              <p
                className={`leading-snug ${
                  !postInfos.general_theme.darkMode ? "text-black" : "text-white"
                }`}
                style={{
                  fontFamily: postInfos.general_fontType,
                  fontSize: `${postInfos.general_text_fontSize}px`,
                  lineHeight: '1.4',
                }}
                dangerouslySetInnerHTML={{
                  __html: processTextWithBold(currentPage.content)
                }}
              />
            </div>
          )}

          {/* Tipo: Conteúdo e Imagem */}
          {currentPage.type === "content-and-image" && (
            <div className="flex flex-col gap-y-2 flex-1">
              <p
                className={`leading-snug ${
                  !postInfos.general_theme.darkMode ? "text-black" : "text-white"
                }`}
                style={{
                  fontFamily: postInfos.general_fontType,
                  fontSize: `${postInfos.general_text_fontSize}px`,
                  lineHeight: '1.4',
                }}
                dangerouslySetInnerHTML={{
                  __html: processTextWithBold(currentPage.content)
                }}
              />
              
              {/* Grid de imagens */}
              {currentPage.images.length > 0 && (
                <div className={`grid gap-2 ${
                  currentPage.images.length === 1 ? "grid-cols-1" :
                  currentPage.images.length === 2 ? "grid-cols-2" :
                  currentPage.images.length === 3 ? "grid-cols-2" :
                  "grid-cols-2"
                }`}>
                  {currentPage.images.slice(0, 4).map((image, imgIndex) => {
                    return (
                      <div
                        key={image.id}
                        className={`overflow-hidden rounded-xl ${
                          currentPage.images.length === 3 && imgIndex === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={image.base64Content}
                          alt={`Imagem ${imgIndex + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Reações opcionais */}
        {postInfos.showReactions && (
          <div className="flex justify-between items-center pt-2 border-t border-opacity-20 border-gray-400">
            <div className="flex gap-x-6">
              <div className="flex items-center gap-x-2 cursor-pointer hover:opacity-70 transition-opacity">
                <HiHeart className={`text-lg ${!postInfos.general_theme.darkMode ? "text-red-500" : "text-red-400"}`} />
                <span className={`text-sm ${!postInfos.general_theme.darkMode ? "text-black" : "text-white"} opacity-70`}>
                  {Math.floor(Math.random() * 50) + 10}
                </span>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer hover:opacity-70 transition-opacity">
                <HiChatBubbleOvalLeft className={`text-lg ${!postInfos.general_theme.darkMode ? "text-blue-500" : "text-blue-400"}`} />
                <span className={`text-sm ${!postInfos.general_theme.darkMode ? "text-black" : "text-white"} opacity-70`}>
                  {Math.floor(Math.random() * 20) + 5}
                </span>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer hover:opacity-70 transition-opacity">
                <HiArrowPath className={`text-lg ${!postInfos.general_theme.darkMode ? "text-green-500" : "text-green-400"}`} />
                <span className={`text-sm ${!postInfos.general_theme.darkMode ? "text-black" : "text-white"} opacity-70`}>
                  {Math.floor(Math.random() * 30) + 8}
                </span>
              </div>
            </div>
            
            {/* Navegação de páginas integrada */}
            {postInfos.showPageNavigation && totalPages > 1 && (
              <div className="flex items-center gap-x-1">
                <span 
                  className="text-sm text-white opacity-40"
                  style={{ fontFamily: postInfos.general_fontType }}
                >
                  {currentPageNumber}/{totalPages}
                </span>
                {currentPageNumber < totalPages && (
                  <HiChevronRight className="text-sm text-white opacity-40" />
                )}
              </div>
            )}
          </div>
        )}

        {/* Navegação de páginas quando reações não estão visíveis */}
        {!postInfos.showReactions && postInfos.showPageNavigation && totalPages > 1 && (
          <div className="flex justify-end pt-2">
            <div className="flex items-center gap-x-1">
              <span 
                className="text-sm text-white opacity-40"
                style={{ fontFamily: postInfos.general_fontType }}
              >
                {currentPageNumber}/{totalPages}
              </span>
              {currentPageNumber < totalPages && (
                <HiChevronRight className="text-sm text-white opacity-40" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Loading overlay */}
      {isDownloadingTime === index && (
        <div className="flex justify-center items-center w-full h-full gap-x-3 absolute top-0 left-0 bg-black bg-opacity-50 rounded-[3rem]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="text-white font-medium">Gerando imagem...</p>
        </div>
      )}
    </div>
  );
}
