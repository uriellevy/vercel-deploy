import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  const [posts, setPosts] = React.useState([])
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl)
  useEffect(() => {
    getPosts();
  },[])

  const getPosts = async () => {
    try {
      const data = await axios.get(`${apiUrl}/posts`);
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