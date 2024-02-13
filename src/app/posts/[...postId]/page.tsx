"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CommentForm from "@/components/CommentForm";
import CommentSection from "@/components/CommentSection";
import {
  getComments,
  getPost,
  getUser,
  Post,
  Comment,
  User,
} from "@/utils/api";

export default function DetailPost({ params }: { params: { postId: string } }) {
  const postId = params.postId;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedPost: Post = await getPost(postId);
        if (!fetchedPost) {
          // Jika postingan tidak ditemukan, redirect ke halaman 404
          router.push("/404");
          return;
        }
        setPost(fetchedPost);

        const fetchedComments: Comment[] = await getComments(postId);
        setComments(fetchedComments);

        const fetchedUser: User = await getUser(fetchedPost.user_id);
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-6 lg:text-4xl ">
                {post.title}
              </h1>
              <p className="text-gray-500">
                {user && <div>Author : {user.name}</div>}
              </p>
            </header>
            <p>{post.body}</p>
            <section className="not-format mt-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                  Discussion
                </h2>
              </div>
              <CommentForm />
              {comments.map((comment) => (
                <CommentSection
                  key={comment.id}
                  name={comment.name}
                  body={comment.body}
                />
              ))}
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
