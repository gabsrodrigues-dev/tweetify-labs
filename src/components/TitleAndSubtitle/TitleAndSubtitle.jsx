import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';

function TitleAndSubtitle({ title }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [originUrl, setOriginUrl] = useState("");
  // window.scrollTo(0, 0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOriginUrl(window.location.origin);
      setCurrentUrl(window.location.href);
    }
  }, []);
  const description = 'Facilite a construção dos seus posts em alguns minutos!'
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} - Tweetify Labs`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
        />
        <meta name="msapplication-TileColor" content="#000" />
        <meta
          name="theme-color"
          content={`#000000`}
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Tweetify Labs`} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Tweetify Labs"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:article:published_time"
          content={new Date().toDateString()}
        />
        <meta property="twitter:title" content={`${title} - Tweetify Labs`} />
        <meta property="twitter:description" content={description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={`${title} - Tweetify Labs`} />
        <meta
          property="og:image"
          content={`${originUrl}/favicon.png`}
        />
        <meta
          property="twitter:image"
          content={`${originUrl}/favicon.png`}
        />
        <meta
          name="msapplication-TileImage"
          content={`${originUrl}/favicon.png`}
        />
        <meta
          property="og:image:alt"
          content={`Logo do Website`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="496" />
        <meta property="og:image:height" content="512" />

        <link rel="canonical" href={currentUrl} />
        <link
          rel="manifest"
          href={`/manifest.json`}
        />
        <meta name="author" content={`Gabriel Rodrigues`} />
      </Helmet>
  );
}

export default TitleAndSubtitle;
