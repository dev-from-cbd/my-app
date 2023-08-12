import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="div">
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
      Sort by{" "}
      <MySelect
        value={filter.sort}
        onChange={(selectedSort = setFilter({ ...filter, sort: selectedSort }))}
        defaultValue="Sort by ↓"
        options={[
          { value: "title", name: "Name" },
          { value: "dateofpost", name: "Date" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
