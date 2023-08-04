const parse = require('html-react-parser');

const Posts = (props) => {
  const { posts } = props;


  const viewPost = (post) => {
    // window.location.href += id;
    console.log(post)
  };

  const parseContent = (content) => {
    return parse(content)
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <div
          className="post"
          key={post._id}
          onClick={() => viewPost(post)}
          >
          <h6>{post.updatedAt}</h6>
          <h2>{post.title}</h2>
          <div className="content">
            {parseContent(post.content)}
          </div>
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
