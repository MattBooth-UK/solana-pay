import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html style={{ visibility: 'hidden' }}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
