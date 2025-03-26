import React from "react";

function PostDisplay({blogPosts, setBlogPosts}) {
  
  const onDelete = (e) => {
    const idx = e.target.id;
    setBlogPosts(blogPosts.filter((post) => post.idx != idx));
  };

  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {blogPosts.map((post) => (
        <div className="post-box" key={post.idx}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <button onClick={onDelete} id ={post.idx}>Delete</button>
        </div>))}
    </div>
  );
}

export default PostDisplay;