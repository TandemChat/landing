import styled, { keyframes } from "styled-components";
import HeroButtons from "./HeroButtons";

const AppearEase = keyframes`
    from {
        opacity: 0;
        transform: translateY(50%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Container = styled.div`
    text-align: center;
    padding-top: 13rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Slogan = styled.h1`
    font-weight: 900;
    padding: 0;
    margin: 0;
    font-size: 2.25rem;
    line-height: 1.1;

    @media not (prefers-reduced-motion) {
        opacity: 0;
        animation: ${AppearEase} 0.5s ${(p) => p.theme.easing} 0.2s forwards;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        font-size: 3rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        font-size: 3.7rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        font-size: 4.5rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        font-size: 70pt;
    }
`;

const Pitch = styled.h3`
    font-weight: 400;
    line-height: 1.2;
    padding: 0;
    margin: 0;
    color: ${(p) => p.theme.colors.foregroundGrey};
    max-width: 70vw;
    font-size: 1rem;

    @media not (prefers-reduced-motion) {
        opacity: 0;
        animation: ${AppearEase} 0.35s ${(p) => p.theme.easing} 0.5s forwards;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        font-size: 1.3rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        max-width: 60vw;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        max-width: 40vw;
    }
`;

const AnimatedButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media not (prefers-reduced-motion) {
        opacity: 0;
        animation: ${AppearEase} 0.35s ${(p) => p.theme.easing} 0.7s forwards;
    }
`;

const IndexHero = () => {
    return (
        <>
            <Container>
                <Slogan>
                    Найди своё сообщество,
                    <br />
                    подключись к миру.
                </Slogan>
                <Pitch>
                    Tandem — один из лучших способов оставаться на связи с друзьями и сообществом, не жертвуя удобством. Мы ориентируемся только на пользователя, и вы можете быть уверены, что ваши разговоры конфиденциальны, а ваши данные защищены.
                </Pitch>
                <AnimatedButtons>
                    <HeroButtons />
                </AnimatedButtons>
            </Container>
        </>
    );
};

export default IndexHero;
