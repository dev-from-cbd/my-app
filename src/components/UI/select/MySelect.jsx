import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ option, defaultValue }) => {
  return (
    <select className={classes.mySlct}>
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
