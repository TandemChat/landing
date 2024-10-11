import Head from "next/head";

const GlobalMeta = () => {
    return (
        <Head>
            <title>Tandem - Найди своё сообщество</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.9, user-scalable=0"
            />
            <meta property="og:title" content="Tandem" key="title" />
            <meta property="og:url" content="https://tandemchat.ru" key="url" />
            <meta
                property="og:image"
                content="https://tandemchat.ru/opengraph.png"
                key="thumbnail"
            />
            <meta
                property="og:description"
                content="Найдите свое сообщество, свяжитесь с миром. Платформа, которая ставит вас на первое место."
                key="description"
            />
            <meta property="twitter:title" content="Revolt" key="tw-title" />
            <meta property="twitter:site" content="@revoltchat" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:image"
                content="https://tandemchat.ru/opengraph.png"
                key="tw-thumbnail"
            />
            <meta
                property="twitter:image:alt"
                content="Tandem. Найдите свое сообщество, свяжитесь с миром."
                key="tw-thumbnail-alt"
            />
            <meta
                property="twitter:description"
                content="Найдите свое сообщество, свяжитесь с миром. Платформа, которая ставит вас на первое место."
                key="tw-description"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1280" />
            <meta property="og:image:height" content="720" />
            <meta name="theme-color" content="#ff4654" />
        </Head>
    );
};

export default GlobalMeta;
