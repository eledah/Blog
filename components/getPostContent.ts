import matter from "gray-matter";
import fs from "fs";

const getPostContent = (slug: string, foldername: string) => {
    const folder = foldername + "/"
    console.log(folder)
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content)
    return matterResult;
}

export default getPostContent;