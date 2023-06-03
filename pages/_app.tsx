import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { NextSeo,DefaultSeo,SocialProfileJsonLd } from 'next-seo'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-quicksand">
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-E6P89SPPPD`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E6P89SPPPD', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <DefaultSeo
        description={"Hello my name Fendi Irfan Amorokhman, You can call me Fendi. I am Currently Pursuing a Career in Data and Artificial Intelligence."}
        defaultTitle="Hi i'm Fendi."
        titleTemplate={`Fanzru.dev`}
        openGraph={{
          title: "Hi i'm Fendi.",
          description: "Hello my name Fendi Irfan Amorokhman, You can call me Fendi. I am Currently Pursuing a Career in Data and Artificial Intelligence.",
          images: [
            {
              url: `/default.jpeg`,
            },
          ],
        }}
        twitter={{
          handle: "@fanzru",
          cardType: "summary_large_image",
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Ananda Affan Fattahila"
        url={"fanzru.dev"}
        sameAs={[
          "http://www.linkedin.com/in/fanzru",
          "https://github.com/fanzru",
          "https://instagram.com/fattahilaaf_",
        ]}
      />
      {/* <NextSeo 
        title="Hi i'm Affan"
        description="Hello my name Ananda Affan Fattahila, You can call me Affan. I'm currently studying to become a Software Engineer and Product Engineer. See you next time!"
      /> */}
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
