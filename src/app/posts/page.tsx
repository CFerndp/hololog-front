import React from "react";
import Typography from "@/components/ui/typography";
import PostCard from "@/components/partials/PostCard/PostCard";

const PostsPage = () => {
  return (
    <>
      <Typography.H2 className="mb-4">Ultimas Berborreas</Typography.H2>
      <PostCard
        title="Demo Card"
        description="Description of the card"
        createdAt={new Date()}
        editedAt={new Date()}
      />
    </>
  );
};

export default PostsPage;
