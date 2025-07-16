export interface Post {
  id: string;
  title: string;
  img?: string;
  description: string;
  content?: string;
  createdAt: Date;
  editedAt: Date;
}

export interface PostDTO {
  id: string;
  title: string;
  img?: string;
  description: string;
  content?: string;
  createdAt: Date;
  editedAt: Date;
}

export const transformPostDTOToPost = (post: PostDTO): Post => {
  return {
    ...post,
    createdAt: new Date(post.createdAt),
    editedAt: new Date(post.editedAt),
  };
};
