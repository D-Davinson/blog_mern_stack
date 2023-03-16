import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

const Home = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const fetchPosts =  async () => {
      const {data} =  await axios.get("http://localhost:5500/");
      setPosts(data);
    };
    fetchPosts();
  })

  return (
    <div>
      <Nav/>
      {posts.map((posts) => posts.title)}
    </div>
  );
};

export default Home
