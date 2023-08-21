// This is the main webpage

import Link from "next/link";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  
  return (
    <div>
      <h1 className="pb-5 font-bold text-2xl text-slate-500">نوشته‌ها</h1>
      <div className="grid grid-cols-1 gap-3">{postPreviews}</div>
    </div>
  );
};

export default HomePage;

