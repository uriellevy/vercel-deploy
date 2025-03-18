import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  const [posts, setPosts] = React.useState([])
  useEffect(() => {
    getPosts();
  },[])

  const getPosts = async () => {
    try {
      const data = await axios.get('http://localhost:5000/api/posts');
      setPosts(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  console.log(posts)
  return (
    <div>Home</div>
  )
}

export default Home