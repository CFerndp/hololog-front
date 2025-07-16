import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { Post, transformPostDTOToPost } from "@/models/Post";
import { transformPaginationDTOToPagination } from "@/models/Pagination";

export const fetchPosts = async (limit: number, offset: number) => {
  const response = await apiClient.get("/posts ", {
    limit: limit.toString(),
    offset: offset.toString(),
  });

  return transformPaginationDTOToPagination<Post>(
    response,
    transformPostDTOToPost
  );
};

export const usePosts = (limit: number = 10, offset: number = 0) => {
  return useQuery({
    queryKey: ["posts", limit, offset],
    queryFn: () => fetchPosts(limit, offset),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
