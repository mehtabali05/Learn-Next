'use client';

import { use } from "react";

const Posts = ({ promise }) => {
    const posts = use(promise);
  return (
    <div className="flex flex-wrap gap-4 justify-center" >
    {posts.map((post) => (
      <div key={post.id} className="block w-[300px] p-4 border border-gray-300 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
  );
};

export default Posts;