import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { getInitialPosts, savePosts } from "../data/postsData";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = getInitialPosts();
  const post = posts.find((p) => p.id === id);

  const handleUpdate = (updated) => {
    const updatedPosts = posts.map((p) =>
      p.id === id ? { ...p, ...updated } : p
    );
    savePosts(updatedPosts);
    navigate("/");
  };

  return <PostForm initialData={post} onSubmit={handleUpdate} />;
}

export default EditPost;
