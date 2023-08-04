const Posts = (props) => {
  const { posts } = props;

  const viewPost = (id) => {
    console.log(id);
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id} onClick={() => viewPost(post._id)}>
          <h2 className="text-3xl font-bold underline">{post.title}</h2>
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
