import '../styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { NextSeo,DefaultSeo,SocialProfileJsonLd } from 'next-seo'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-quicksand">
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-P23EEJWN9X`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P23EEJWN9X', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <DefaultSeo
        description={"Hello my name Fendi Irfan Amorokhman, You can call me Fendi. I am Currently Pursuing a Career in Data and Artificial Intelligence."}
        defaultTitle="Hi i'm Fendi."
        titleTemplate={`Fendev.my.id`}
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
          handle: "",
          cardType: "summary_large_image",
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Fendi Irfan Amorokhman"
        url={"fendev.my.id"}
        sameAs={[
          "http://www.linkedin.com/in/fendiirfan",
          "https://github.com/fendiirfan",
          "https://instagram.com/fattahilaaf_",
        ]}
      />
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
