import IndexHero from "../components/layout/hero/IndexHero/IndexHero";
import styled from "styled-components";
import HeroFadeout from "../components/layout/hero/HeroFadeout";
import Feature from "../components/index/Feature";
import PagePadding from "../components/layout/global/PagePadding";
import PreFooterCTA from "../components/layout/hero/IndexHero/PreFooterCTA";

import Servers from "../assets/illustrations/Servers.svg";
import Roles from "../assets/illustrations/Roles.svg";
import Private from "../assets/illustrations/Private.svg";
import Colors from "../assets/illustrations/Colors.svg";
import { GetStaticProps } from "next";

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLighter};
`;

interface HomeProps {
    fadeoutUrl: string;
}

export default function Home({ fadeoutUrl }: HomeProps) {
    return (
        <>
            <HeroContainer>
                <IndexHero />
                <HeroFadeout staticFadeoutUrl={fadeoutUrl} />
            </HeroContainer>
            <PagePadding>
                <Feature
                    heading="Создайте пространство только для вас и ваших друзей"
                    image={Servers.src}
                >
                    Tandem lets you create a private space for you and your
                    friends to chat, without any of the distractions of other
                    chat apps. You can customize your server however you want,
                    and even invite any other friends to join you.
                </Feature>
                <Feature
                    heading="Создан даже для самых уникальных сообществ"
                    image={Roles.src}
                    reverse
                >
                    Tandem is perfect for communities looking to chat with their
                    members. With role-based access control and in-depth
                    customization, you can get started from creation to invite
                    in minutes.
                </Feature>
                <Feature
                    heading="Ваши данные - только Ваши"
                    image={Private.src}
                >
                    Tandem will not sell your data or leak it to advertisers.
                    Our code is open source and can be audited by anyone
                    willing. Based in Europe and bound to the GDPR, we take your
                    privacy very seriously. And with end-to-end encryption
                    coming to DMs and group chats soon, you can be absolutely
                    sure of it.
                </Feature>
                <Feature
                    heading="Добавьте уникальности в 1 клик!"
                    image={Colors.src}
                    reverse
                >
                    Tandem's open architecture makes it easier than ever to
                    build custom bots and clients for anything your heart
                    desires. You can even make your own Tandem app if you want
                    to. And with every single color customizable, you don't need
                    to know how to program to make it feel like you want to.
                </Feature>
            </PagePadding>
            <PreFooterCTA />
        </>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // See components/layout/hero/HeroFadeout for an explanation of what we're doing here
    const fs = await import("fs/promises");
    const { join } = await import("path");

    const fadeoutPath = join(
        process.cwd(),
        "assets",
        "illustrations",
        "Fadeout.svg"
    );
    const fadeoutContents = await fs.readFile(fadeoutPath);
    const fadeoutUrl = fadeoutContents.toString("base64");

    return {
        props: {
            fadeoutUrl: `data:image/svg+xml;base64,${fadeoutUrl}`,
        },
    };
};
