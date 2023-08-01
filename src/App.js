import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS is JavaScript" },
    { id: 2, title: "TS", body: "TS is TypeScript" },
    { id: 3, title: "ECMA-262", body: "ECMA-262 is ECMAScript" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr className="hr" />
      <div className="div">
        Sort by{""}
        <select className="select">
          <option value="value1">Name</option>
          <option value="value2">Date</option>
        </select>
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Title" />
      ) : (
        <h1 className="posts-are-missing">Posts are missing</h1>
      )}
    </div>
  );
}

export default App;
