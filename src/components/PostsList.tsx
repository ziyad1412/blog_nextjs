import PostCard from "./PostCard";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
