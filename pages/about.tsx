import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { renderMarkdown } from "../lib/markdown";
import MarkdownView from "../components/posts/MarkdownView";
import { getLegalFile, LEGALFILES } from "../lib/legal";

interface AboutProps {
    renderedContents: string;
}

export default function About({
    renderedContents,
}: AboutProps) {
    return (
        <PagePadding>
            <PageTitle>{`О нас - Tandem`}</PageTitle>
            <MarkdownView rendered={renderedContents}></MarkdownView>
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
    const markdown = await getLegalFile(LEGALFILES.ABOUT);
    const rendered = await renderMarkdown(markdown);

    return {
        props: {
            renderedContents: rendered,
        },
    };
};
