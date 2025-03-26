import React from "react";

function PostDisplay({ displayedPosts, onDelete }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {displayedPosts.map((post) => (
        <div className="post-box" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button onClick={onDelete} id={post.id}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;