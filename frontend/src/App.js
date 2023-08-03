import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  console.log(posts);

  return (
    <div className="App">
      <h1>Oscar Welton Blog App</h1>
    </div>
  );
}

export default App;
