import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter"
import getPostMetadata from "../../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/"
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug)
    return (
        <div dir="rtl">
            <h1 className="font-extrabold text-4xl text-yellow-600 text-center pb-5">{post.data.title}</h1>
            <article className="prose lg:prose-xl lg:max-w-3xl text-justify text-slate-600">
                <Markdown>{post.content}</Markdown>
            </article>
            <p className="text-center text-slate-400 text-sm">تاریخ نگارش: {post.data.date}</p>
        </div>
    );
};

export default PostPage;