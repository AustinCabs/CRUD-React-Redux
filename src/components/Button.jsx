import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 py-2 px-6 my-10 text-white rounded hover:bg-indigo-700"
    >
      {children}
    </button>
  );
};

export default Button;
