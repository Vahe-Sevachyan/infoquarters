import { useParams } from "react-router-dom";
import { getInitialPosts } from "../data/postsData";

function PostDetail() {
  const { id } = useParams();
  const post = getInitialPosts().find((p) => p.id === id);

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
