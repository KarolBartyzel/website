import React, { useState } from 'react';
import { Loader } from '../../components';
import { useBlog } from '../../hooks';
import { BlogModel } from './Blog.model';

// import './Blog.scss';
import BlogEntry from './BlogEntry';

const Blog = () => {
  const [activeBlog, setActiveBlog] = useState<BlogModel | null>(null);

  const { blogs } = useBlog();

  return (
    <div className="blog">
      {activeBlog ? (
        <div className="blog-active">Active</div>
      ) : blogs !== null ? (
        <div className="blog-entries">
          {blogs.map(blog => (
            <BlogEntry
              key={blog.id}
              blog={blog}
              setActiveBlog={setActiveBlog}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Blog;
