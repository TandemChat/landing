import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentPlatform, Platform } from "../../../../lib/platform";
import {
    PlatformButton,
    PLATFORM_BUTTON_DATA,
} from "../../../../lib/platform-data";
import URLs from "../../../../lib/urls";
import LinkButton from "../../../ui/LinkButton";

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    a button {
        width: 100%;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

const OtherPlatforms = styled.span`
    color: ${(p) => p.theme.colors.foregroundGrey};
    font-weight: 300;
`;

interface HeroButtonsProps {
    darker?: boolean;
}

const HeroButtons = ({ darker }: HeroButtonsProps) => {
    const [platformId, setPlatformId] = useState<Platform | null>();
    const [platformInfo, setPlatformInfo] = useState<PlatformButton | null>();

    useEffect(() => {
        const platformName = getCurrentPlatform();
        const platform = PLATFORM_BUTTON_DATA[platformName];

        setPlatformId(platformName);
        setPlatformInfo(platform);
    }, []);

    return (
        <>
            <Buttons>
                <LinkButton
                    variant={darker ? "regular" : "regular-invert"}
                    href={URLs.pwa}
                >
                    Открыть Веб-Приложение
                </LinkButton>
                {platformId &&
                    !["other", "ssr"].includes(platformId ?? "") &&
                    platformInfo?.url && (
                        <LinkButton href={platformInfo.url} variant="primary">
                            Скачать{" "}
                            {platformInfo.source
                                ? `из ${platformInfo.source}`
                                : `для ${platformInfo?.name}`}
                        </LinkButton>
                    )}
            </Buttons>
            <Link href="/download">
                <OtherPlatforms>
                    Посмотреть платформы и загрузки
                </OtherPlatforms>
            </Link>
        </>
    );
};

export default HeroButtons;
