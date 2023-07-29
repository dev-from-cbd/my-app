import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS is JavaScript" },
    { id: 2, title: "TS", body: "TS is TypeScript" },
    { id: 3, title: "ECMA-262", body: "ECMA-262 is ECMAScript" },
  ]);

  const [title, setTitle] = useState("");

  const bodyInputRef = useRef("");

  //const [description, setDescription] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();

    console.log(title);
    console.log(bodyInputRef.current.value);

    //const newPost = {
    //id: posts.length + 1,
    //title: title,
    //body: description,
    //};

    //setPosts([...posts, newPost]);

    //setTitle("");
    //setDescription("");
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Name of post"
        />
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Description of post"
        />
        <MyButton onClick={addNewPost}>Create a new post</MyButton>
      </form>

      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;
