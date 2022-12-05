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
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link href="https://app.telegram-feedback.com/chat.js?wid=44bc091c-5f0b-4b85-9f1b-b239e8950da1"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://app.telegram-feedback.com/chat.js?wid=44bc091c-5f0b-4b85-9f1b-b239e8950da1"></script>

                </body>
            </Html>
        );
    }
}


export default MyDocument;