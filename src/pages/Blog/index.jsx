import React from 'react';
import BlogPage from '../../components/BlogPage';

export default function Blog() {
  const blog = {
    title: "My Blog"
  };
  return (
    <BlogPage title={blog.title}/>
  )
}
