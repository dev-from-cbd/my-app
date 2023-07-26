import React from 'react';

const MyButton = (props) => {
    return (
        <button className={`my-button ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default MyButton;