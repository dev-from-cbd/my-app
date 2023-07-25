// Import the React module from the "react" library
import React from "react";

// Define the PostItem component as a functional component
// It receives "props" as an argument, which will hold the data passed from the parent component
const PostItem = (props) => {
  // Log the "props" object to the console for debugging purposes
  console.log(props);

  // Return JSX (React elements) to be rendered in the DOM
  return (
    <div className="post">
      {/* Create a div with className "post__content" to style the post content */}
      <div className="post__content">
        {/* Display the post id and title inside a strong element */}
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        {/* Display the post body inside a div element */}
        <div>{props.post.body}</div>
      </div>

      {/* Create a div with className "post__btns" to style the post buttons */}
      <div className="post__btns">
        {/* Render a button with className "post__btn__Delete" for deleting the post */}
        <button className="post__btn__Delete">Delete</button>
      </div>
    </div>
  );
};

// Export the PostItem component to make it available for other parts of the application
export default PostItem;
