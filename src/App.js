import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", dateofpost: "07.08.23", body: "JS is JavaScript" },
    { id: 2, title: "TS", dateofpost: "06.08.23", body: "TS is TypeScript" },
    {
      id: 3,
      title: "ECMA-262",
      dateofpost: "05.08.23",
      body: "ECMA-262 is ECMAScript",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState();

  const [searchQuery, setSearchQuery] = useState();

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((posts) =>
      posts.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(sortedPosts);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr className="hr" />
      <div className="div">
        <MyInput
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        Sort by{""}
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by ↓"
          options={[
            { value: "title", name: "Name" },
            { value: "dateofpost", name: "Date" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Title"
        />
      ) : (
        <h1 className="posts-are-missing">Posts are missing</h1>
      )}
    </div>
  );
}

export default App;
