import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body.slice(0, 130)}...</p>
        <div className="card-actions">
          <Link href={`/posts/${post.id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
