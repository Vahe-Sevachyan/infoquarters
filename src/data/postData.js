export const getInitialPosts = () => {
  const saved = localStorage.getItem("posts");
  return saved ? JSON.parse(saved) : [];
};

export const savePosts = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};
