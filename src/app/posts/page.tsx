import React from "react";
import Typography from "@/components/ui/typography";
import PostCard from "@/components/partials/PostCard/PostCard";
import { fetchPosts } from "./hooks";

const PostsPage = async () => {
  const data = await fetchPosts(10, 0);

  return (
    <>
      <Typography.H2 className="mb-4">Ultimas Berborreas</Typography.H2>
      {data.items.length === 0 ? (
        <Typography.Blockquote>No hay berborreas aun...</Typography.Blockquote>
      ) : (
        data.items.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
            editedAt={post.editedAt}
            image={post.img}
          />
        ))
      )}
    </>
  );
};

export default PostsPage;
