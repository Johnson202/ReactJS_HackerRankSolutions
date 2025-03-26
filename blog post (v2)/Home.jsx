import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [inputText, setInputText] = useState({title: "", description: ""});
  const [blogPosts, setBlogPosts] = useState([]);
  const [counter, setCounter] = useState(0);

  const onCreatePost = (e) => {
    if (inputText.title != '' && inputText.description != '') {
      setBlogPosts((prevState) => {
        const newState = [...prevState, {title: inputText.title, description: inputText.description, idx: counter}];
        setCounter(counter + 1);
        setInputText({title: "", description: ""});
        return newState;
      });
    };
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input setInputText={setInputText} inputText={inputText}/>
        <button data-testid="create-button" className="mt-10" onClick={onCreatePost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay blogPosts={blogPosts} setBlogPosts={setBlogPosts}/>
      </div>
    </div>
  );
}

export default Home;