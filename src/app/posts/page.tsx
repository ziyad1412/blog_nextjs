"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import PostsList from "@/components/PostsList";
import { getPosts, Post } from "@/utils/api";

const POSTS_PER_PAGE = 6;

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts: Post[] = await getPosts(currentPage);
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="px-10">
      <div className="py-2">
        <Hero />
      </div>
      <div className="divider font-bold">Post List</div>
      <PostsList
        posts={posts.slice(
          (currentPage - 1) * POSTS_PER_PAGE,
          currentPage * POSTS_PER_PAGE
        )}
      />
      <div className="join flex justify-center mt-7">
        <button
          className="join-item btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          className="join-item btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
}
