import React from "react";

const TextField = ({ value, onChange, label, ...props }) => {
  return (
    <div className="flex flex-col mt-5">
      <label className="mb-2 text-base text-gray-800" htmlFor="">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...props}
      />
    </div>
  );
};

export default TextField;
