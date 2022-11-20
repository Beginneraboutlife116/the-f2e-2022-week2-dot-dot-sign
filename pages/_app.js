import Script from "next/script"
import "../src/sass/index.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://mozilla.github.io/pdf.js/build/pdf.js"
        strategy="lazyOnload"
      />
      {/* <Script src="https://cdnjs.com/libraries/pdf.js" strategy="lazyOnload" /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
