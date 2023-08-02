// import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Head, Html, Main, NextScript } from "next/document";

export const Document = () => {
  return (
    <Html lang="en">
      <body>
        {/* <!-- Messenger Chat plugin Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Chat plugin code --> */}
        <div id="fb-customer-chat" class="fb-customerchat"></div>
        <Script
          id="messenger-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `{Code within first script tag}`,
          }}
        ></Script>
        <Script
          id="messenger-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `{Code within second script tag}`,
          }}
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
