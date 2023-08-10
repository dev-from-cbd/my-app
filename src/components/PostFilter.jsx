import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = (filter, setFilter) => {
  return (
    <div className="div">
      <MyInput
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />{" "}
      {/* Render MyInput component for search */}
      Sort by{""}
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by ↓"
        options={[
          { value: "title", name: "Name" },
          { value: "dateofpost", name: "Date" },
        ]}
      />{" "}
      {/* Render MySelect component for sorting options */}
    </div>
  );
};

export default PostFilter;
