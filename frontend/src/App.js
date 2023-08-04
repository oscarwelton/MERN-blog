import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './widgets/Posts.jsx';

function App() {
  const [posts, setPosts] = useState([]);

  const createPost = () => {
    console.log("create post");
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
      <h1>Oscar Welton</h1>
      <Posts posts={posts} />

      <button onClick={() => createPost()}>Create Post</button>
    </div>
  );
}

export default App;
