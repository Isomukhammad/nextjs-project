import Head from 'next/head';
import Layout from '../components/Layout'
import Image from 'next/image'
import youtubeIMG from '../public/youtube.png';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>  
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp;
