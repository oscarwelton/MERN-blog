const Posts = (props) => {
  const { posts } = props;

  const viewPost = (post) => {
    // window.location.href += id;
    console.log(post)
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div
          className="post"
          key={post._id}
          onClick={() => viewPost(post)}
        >
          <h2>{post.title}</h2>
          <h5>{post.content.slice(0, 150)}</h5>
          <h6>{post.updatedAt}</h6>
          <p>Tags:</p>
          {post.tags.map((tag) => (
            <ul className="tags">
              <li className="tag">{tag}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
