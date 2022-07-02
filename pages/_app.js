import Head from 'next/head';

import '../assets/styles/reset.css';
import '../assets/styles/fonts.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style global jsx>{`
                :root {
                    background-color: #000;
                    margin: 0;
                    overflow-x: hidden;
                    padding: 0;
                    scroll-behavior: smooth;

                    --color-accent: #d39f64;
                }

                html,
                body {
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                a {
                    text-decoration: none;
                }
            `}</style>
            <Head>
                <title>Frontier Atelier</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
