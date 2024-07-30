import React from 'react';
import BlogPage from '../../components/BlogPage';

export default function Blog() {
  const blog = {
    title: "My Blog",
    id: "blog"
  };
  return (
    <BlogPage id={blog.id} title={blog.title}/>
  )
}
