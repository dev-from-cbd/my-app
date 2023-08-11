// Import necessary modules and components
import React, { useMemo, useState } from "react"; // Import React and required hooks
import PostList from "./components/PostList"; // Import the PostList component
import PostForm from "./components/PostForm"; // Import the PostForm component
import PostFilter from "./components/PostFilter"; // Import the PostFilter component
import "./styles/App.css"; // Import the CSS file for styling

function App() {
  // Define initial state for posts using useState hook
  const [posts, setPosts] = useState([
    // Initialize an array of post objects
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
  /* const [selectedSort, setSelectedSort] = useState(); // Store the selected sort criteria
  const [searchQuery, setSearchQuery] = useState(); */ // Store the search query

  const [filter, setFilter] = useState({ sort: "", query: "" }); // Store filter criteria

  // Calculate sorted posts based on selectedSort using useMemo hook
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  // Calculate posts that are both sorted and searched
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [filter.query, sortedPosts]);

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
      <PostFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSort={selectedSort}
        sortPosts={sortPosts}
      />{" "}
      {/* Pass necessary props to PostFilter component */}
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
