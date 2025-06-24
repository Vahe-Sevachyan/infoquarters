import { Link } from "react-router-dom";
import { getInitialPosts, savePosts } from "../data/postsData";

function Home() {
  const posts = getInitialPosts();

  const handleDelete = (id) => {
    const updated = posts.filter((p) => p.id !== id);
    savePosts(updated);
    window.location.reload(); // quick fix for now
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">+ New Post</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <Link to={`/edit/${post.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
