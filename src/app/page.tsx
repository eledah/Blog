// This is the main webpage

import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import getPostBanner from "../../components/getPostBanner";

const BANNERID = 'pattern'

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const bannerPost = getPostBanner(postMetadata, BANNERID)
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  // Sort previews by order
  postPreviews.sort((secondItem, firstItem) => firstItem.props.order - secondItem.props.order);

  
  return (
    <div>
      <div>{bannerPost}</div>
      <p className="text-center pb-5 border-b-2 ">
          <a href={"/posts/blog/"+ BANNERID} className="mx-auto text-center">
              <button className="border border-teal-600 border-6 bg-yellow-50 p-1 rounded-md text-sm text-teal-500 hover:bg-teal-600 hover:text-white">
               ↓ ادامه ↓
              </button>
          </a>
      </p>
      <h1 className="py-5 font-bold text-2xl text-slate-500">تمامی نوشته‌ها</h1>
      <div className="grid grid-cols-1 gap-3">{postPreviews}</div>
    </div>
  );
};

export default HomePage;

