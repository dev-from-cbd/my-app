// Import necessary modules and components
import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/App.css";

function App() {
  // Define initial state for posts using useState hook
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

  // Define state variables for sorting and searching
  //const [selectedSort, setSelectedSort] = useState();
  /*const [searchQuery, setSearchQuery] = useState(); */

  const [filter, setFilter] = useState({ sort: '', query: ''});

  // Calculate sorted posts based on selectedSort using useMemo hook
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  // Calculate posts that are both sorted and searched
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  // Define function to create a new post
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Define function to remove a post
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // Define function to sort posts
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(sortedPosts);
  };

  // Render the main application UI
  return (
    <div className="App">
      <PostForm create={createPost} /> {/* Render PostForm component */}
      <hr className="hr" />
      <PostFilter />
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Title"
        /> /* Render PostList component with sortedAndSearchedPosts */
      ) : (
        <h1 className="posts-are-missing">Posts are missing</h1>
      )}
    </div>
  );
}

export default App; // Export the App component as default
