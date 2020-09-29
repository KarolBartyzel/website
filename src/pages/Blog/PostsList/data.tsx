import React from 'react';

import PostsListComponent from './comp';

function PostsListData() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // Promise.all(['/Posts/1.json'].map((postUrl) => fetch(postUrl).then(async (response) => await response.json()))).then((posts: Array<PostType>) => setPosts(posts));
  }, []);

  if (posts === null) {
    return null;
  }

  return (
    <PostsListComponent posts={posts} />
  );
};

export default PostsListData;
