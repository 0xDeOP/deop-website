import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="twitter:card" content="summary"/>
                <meta property="og:url" content="https://deop.com"/>
                <meta property="og:title"
                      content="Deflationary Ordinals Protocol (DeOP) - BRC20"/>
                <meta property="og:description" content="Deflationary Ordinals Protocol: The first deflationary protocol on Ordinals.
DeOP will use revenue from the marketplace to buy back and burn the supply"/>
                <meta property="og:image" content="https://i.ibb.co/MncjnRd/bu0p-Mhk-Imgur.png"/>

                <meta property="og:url" content="https://deop.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="Deflationary Ordinals Protocol: The first deflationary protocol on Ordinals.
DeOP will use revenue from the marketplace to buy back and burn the supply"/>
                <meta property="og:description" content="Deflationary Ordinals Protocol: The first deflationary protocol on Ordinals.
DeOP will use revenue from the marketplace to buy back and burn the supply"/>
                <meta property="og:image" content="https://i.ibb.co/MncjnRd/bu0p-Mhk-Imgur.png"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <body className='body-app dark-mode' data-color="color-theme-yellow">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
