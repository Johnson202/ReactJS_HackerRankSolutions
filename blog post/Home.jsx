import React, {useState, useEffect} from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {

  const [inputBlog, setInputBlog] = useState({title: '', description: ''});
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [autoIncrement, setAutoIncrement] = useState(0);

  const onDelete = (e) => {
    const id = e.target.id;
    setDisplayedPosts((prevState) => prevState.filter((post) => post.id != id));
  };

  const onChange = (e) => {
    const attribute = e.target.getAttribute('data-testid');
    setInputBlog((prevState) => {
      const updatedState = {...prevState};
      if (attribute == 'description-input') {
        updatedState['description'] = e.target.value;
      }
      else if (attribute == 'title-input') {
        updatedState['title'] = e.target.value;
      };
      return updatedState;
    });
  };

  const addPost = (e) => {
    e.preventDefault();
    if (inputBlog.title != '' && inputBlog.description != '') {
      setDisplayedPosts((prevState) => {
        const updatedState = [...prevState, {id: autoIncrement, title: inputBlog.title, description: inputBlog.description}];
        return updatedState;
      });
      setInputBlog({title: '', description: ''});
      setAutoIncrement(prevState => prevState + 1);
    };
  };

  // useEffect(() => {
  //   console.log(inputBlog);
  // }, [inputBlog]);

  // useEffect(() => {
  //   console.log(displayedPosts);
  // }, [displayedPosts]);

  // useEffect(() => {
  //   console.log(autoIncrement);
  // }, [autoIncrement]);

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input onChange={onChange} inputBlog={inputBlog} setInputBlog={setInputBlog}/>
        <button data-testid="create-button" className="mt-10" onClick={addPost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay displayedPosts={displayedPosts} onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default Home;