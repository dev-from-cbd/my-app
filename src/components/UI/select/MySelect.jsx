import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue }) => {
  return (
    <select className={classes.mySlct}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
