import Head from 'next/head'
import '../styles/index.css'
import '../styles/tailwind.css'
import SEO from '../../next-seo.config'
import {DefaultSeo} from 'next-seo'
import {ToastContainer} from 'components/common/toast'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Roboto&display=swap" rel="stylesheet" />
        <script async defer data-domain="jsco.dev" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <DefaultSeo {...SEO} />
      <ToastContainer>
        <Component {...pageProps} />
      </ToastContainer>
    </>
  )
}

export default MyApp
