import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import PostForm from "../components/PostForm";
import { getInitialPosts, savePosts } from "../data/postsData";

function CreatePost() {
  const navigate = useNavigate();
  const handleCreate = (post) => {
    const posts = getInitialPosts();
    const newPost = { id: uuid(), ...post };
    posts.push(newPost);
    savePosts(posts);
    navigate("/");
  };

  return <PostForm onSubmit={handleCreate} />;
}

export default CreatePost;
