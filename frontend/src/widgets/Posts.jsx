const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.tags.map((tag) => (
            <ul>
              <li>{tag}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Posts;
