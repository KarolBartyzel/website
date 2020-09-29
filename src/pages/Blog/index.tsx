import React from 'react';

import PostsList from './PostsList';

const BlogPage: PageType = function BlogPage() {
  const [openPost, setOpenPost] = React.useState(null);

  return (
    <div className="blog">
      {!openPost && <PostsList />}
      {openPost && null}
    </div>
  );
}

export default BlogPage;
