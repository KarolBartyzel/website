import React from 'react';

function PostsListEntry({ post }: { post: PostType }) {
  return (
    <div className="posts-list-entry">
      <h1 className="posts-list-entry-title">{post.title}</h1>
      <div className="posts-list-entry-details">
        <summary className="posts-list-entry-summary">{post.summary}</summary>
        <img
          className="posts-list-entry-image"
          src={post.image}
          alt={`${post.title} image`}
        />
      </div>
    </div>
  );
}

function PostsList({ posts }: { posts: Array<PostType> }) {
  return (
    <ul className="posts-list">
      {posts.map(post => (
        <PostsListEntry key={post.title} post={post} />
      ))}
    </ul>
  );
}

export default PostsList;
