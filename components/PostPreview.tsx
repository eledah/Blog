import Link from "next/link"
import { PostMetadata } from "./PostMetadata"
import getPostMetadata from "./getPostMetadata"

const PostPreview = (props: PostMetadata) => {
    return ( 
     <div className="border-r-2 border-yellow-500 p-4 rounded-md shadow-md bg-yellow-50">  
        <Link href={`/posts/${props.slug}`}>
            <h2 className="text-2xl font-bold text-yellow-600 hover:underline mb-2">{props.title}</h2>
        </Link>
        <p className="text-slate-700 pb-2">{props.subtitle}</p>
        <p className="text-sm text-slate-400">{props.date}</p>
    </div>
    );
}

export default PostPreview