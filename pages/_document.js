import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name='description' content='Frontier Atelier' />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/assets/favicon/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/assets/favicon/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/assets/favicon/favicon-16x16.png'
                    />
                    <link
                        rel='manifest'
                        href='/assets/favicon/site.webmanifest'
                    />
                    <link
                        rel='mask-icon'
                        href='/assets/favicon/safari-pinned-tab.svg'
                        color='#171717'
                    />
                    <meta name='msapplication-TileColor' content='#171717' />
                    <meta name='theme-color' content='#171717' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
