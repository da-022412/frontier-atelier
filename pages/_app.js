import Head from 'next/head';

import '../assets/styles/reset.css';

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
                }

                a {
                    text-decoration: none;
                }
            `}</style>
            <Head>
                <title>Lazy Lamb</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
