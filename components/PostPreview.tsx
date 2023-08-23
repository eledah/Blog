import Link from "next/link"
import { PostMetadata } from "./PostMetadata"
import getPostMetadata from "./getPostMetadata"

const PostPreview = (props: PostMetadata) => {
    return ( 
        <>
            <div>
                <div className="my-auto">
                    <p className="text-lg text-slate-400 align-middle inline-block float-right">{props.date} {props.year} | </p>
                </div>
                <div>
                    <Link href={`/posts/${props.slug}`}>
                        <h2 className="text-lg pr-2 text-slate-600 hover:text-teal-600 inline-block float-right">{props.title}</h2>
                    </Link>
                    </div>
            </div>
        </>
    );
}

export default PostPreview