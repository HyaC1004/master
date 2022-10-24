/*
    _document.js는 next.js 에서 만든 기본 HTML 문서 형식을
    바꾸고자 정의내리면 됨.
*/

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <title>유기동물조회</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                rel="stylesheet"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}