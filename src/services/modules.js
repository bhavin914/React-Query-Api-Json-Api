import apiaxiosClient from "./axios-instance";

// export const getAllUsers = () => apiaxiosClient.get(routes.modules);
export const getAllUsers = () => apiaxiosClient.get("/");

export const getPosts = (post) => apiaxiosClient.post("/", post);

export const updatePosts = (post, data) => {
  const { Id } = post;
  return apiaxiosClient.put(`/`, post, {
    params: { id: Id },
  });
};

export const deletePosts = (id) => apiaxiosClient.delete("/", id);
