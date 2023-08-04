const Posts = (props) => {
  const { posts } = props;

  const viewPost = (id) => {
    console.log(id);
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div
          className="post"
          key={post.id}
          onClick={() => viewPost(post._id)}
        >
          <h2>{post.title}</h2>
          <h5>{post.content}</h5>
          {post.tags.map((tag) => (
            <ul className="tags">
              <li>{tag}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
