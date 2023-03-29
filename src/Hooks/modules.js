import { useQuery, useMutation } from "@tanstack/react-query";

import {
  deletePosts,
  getAllUsers,
  getPosts,
  updatePosts,
} from "../services/modules";

export const useGetAllUsers = () => useQuery(["module"], getAllUsers);

export const useAddPosts = () => useMutation(getPosts);

export const useUpdatePosts = () => useMutation(updatePosts);

export const useDeletePosts = () => useMutation(deletePosts);
