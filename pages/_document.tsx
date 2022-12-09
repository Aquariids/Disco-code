import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                <meta name="description" content="Документ сайта" />
                <meta name="theme-color" content="#fff" />
                <meta name="referrer" content={'strict-origin'} />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}


export default MyDocument;