import PagePadding from "../../components/layout/global/PagePadding";
import PageTitle from "../../components/layout/global/PageTitle";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostBySlug, Post } from "../../lib/posts";
import { renderMarkdown } from "../../lib/markdown";
import MarkdownView from "../../components/posts/MarkdownView";
import PostMetadata from "../../components/posts/PostMetadata";
import CommentsView from "../../components/posts/CommentsView";
import CustomMeta from "../../components/layout/global/CustomMeta";

import "./md.css";

interface PostsProps {
    post: Post;
}

export default function Posts({ post }: PostsProps) {
    return (
        <PagePadding>
            <CustomMeta
                meta={{
                    title: `${post.title} - Tandem`,
                    description: post.description,
                    thumbnailAt: `https://tandemchat.ru${post.coverImage}`,
                    url: `https://tandemchat.ru/posts/${post.slug}`,
                }}
            />
            <PageTitle>{`${post.title} - Tandem`}</PageTitle>
            <PostMetadata post={post} />
            <MarkdownView rendered={post.content}></MarkdownView>
            {post.giscus && <CommentsView />}
        </PagePadding>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    const slugs = getAllPostSlugs();

    return {
        paths: slugs.map((slug) => {
            return {
                params: {
                    slug: slug.replace(/.md$/, ""),
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    PostsProps,
    { slug: string }
> = async ({ params }) => {
    const post = getPostBySlug(params.slug);
    const rendered = await renderMarkdown(post.content);

    return {
        props: {
            post: { ...post, content: rendered },
        },
    };
};
