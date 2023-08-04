import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './widgets/Posts.jsx';
import NewPost from './widgets/NewPost.jsx';

function App() {
  const [posts, setPosts] = useState([]);



  const homePage = () => {
    window.location.href = "/";
  }

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
      <button>New Post</button>
      <Posts posts={posts} />
      <NewPost />
    </div>
  );
}

export default App;
