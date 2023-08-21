import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter"
import getPostMetadata from "../../../../components/getPostMetadata";
import Link from "next/link";

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
            <h1 className="font-extrabold text-2xl text-teal-600">{post.data.title}</h1>
            <article className="prose prose-xl lg:max-w-3xl text-slate-600">
                <Markdown>{post.content}</Markdown>
            </article>
            <br></br>
            <p className="text-center text-slate-400 text-sm">زمان نگارش: {post.data.date} {post.data.year}</p>
            
            <br></br>

            <p className="text-center">
                <a href="/" className="mx-auto text-center">
                    <button className="border border-teal-600 border-6 bg-yellow-50 p-1 rounded-md text-sm text-teal-500 hover:bg-teal-600 hover:text-white">
                        بازگشت به صفحهٔ اول
                    </button>
                </a>
            </p>
        </div>
    );
};

export default PostPage;