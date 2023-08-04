import parse from "html-react-parser";
import convertDate from "../helpers/date-helper.js"

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
          <h6 className="post-date">{convertDate(post.updatedAt)}</h6>
          <h2 className="post-title">{post.title}</h2>
          <div className="post-content">
            {post.content}
          </div>
          <p>Tags:</p>
          {post.tags.map((tag) => (
            <ul className="post-tags">
              <li className="post-tag">{tag}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
