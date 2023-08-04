import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./widgets/Posts.jsx";
import NewPost from "./widgets/NewPost.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);

  const homePage = () => {
    window.location.href = "/";
  };

  const swtichContent = (event) => {
    newPost ? setNewPost(false) : setNewPost(true);
    event.target.innerText = "New Post"
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/posts");
      const data = response.data;
      setPosts(data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1 onClick={() => homePage()}>Oscar Welton</h1>
      <button
        onClick={() => {
          swtichContent();
        }}
      >
        New Post
      </button>
      <div className="home-container">
        {newPost ? <NewPost /> : <Posts posts={posts} />}
      </div>
    </div>
  );
}

export default App;
