import React from 'react';
import axios from 'axios';
import BlogCard from '@/components/BlogCard';

const fecthBlogs = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/blogs`);
  return data;
};

const Home = async () => {
  const blogs = await fecthBlogs();

  return (
    <div className='container'>
      <div className='row'>
        {blogs.map(blog => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Home;
