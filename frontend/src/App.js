import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './widgets/Posts.jsx';

function App() {
  const [posts, setPosts] = useState([]);

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
      <h1 className="p-4 bg-blue-500 text-white">Oscar Welton</h1>
      <h2>Posts</h2>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
