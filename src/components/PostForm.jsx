import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", dateofpost: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({ title: "", dateofpost: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        value={post.dateofpost}
        onChange={(e) => setPost({ ...post, dateofpost: e.target.value })}
        type="text"
        placeholder="Description of post"
      />
      <MyButton onClick={addNewPost}>Create a new post</MyButton>
    </form>
  );
};

export default PostForm;
