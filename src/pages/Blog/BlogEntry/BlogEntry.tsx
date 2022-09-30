import React, { Dispatch } from 'react';

import { BlogModel } from '../Blog.model';
import './BlogEntry.scss';

interface IBlogEntry {
  blog: BlogModel;
  setActiveBlog: Dispatch<BlogModel>;
}

const BlogEntry = ({ blog }: IBlogEntry) => {
  return (
    <div className="blog-entry">
      <div className="blog-entry-header">
        <h2 className="blog-entry-title">{blog.title}</h2>
        <h4 className="blog-entry-date">{blog.publishedDate}</h4>
      </div>
      <div className="blog-entry-content">
        <p className="blog-entry-extract">
          {blog.extract}...
          <button className="blog-entry-open">Continue reading</button>
        </p>
      </div>
    </div>
  );
};

export default BlogEntry;
