import React from "react";

export default function Input() {
  return (
    <div className="border-b my-2 py-2 border-white relative">
      <input
        type="text"
        className="bg-transparent input text-white text-sm z-10 relative focus:outline-none "
      />
      <label className="text-white cursor-text duration-300 text-opacity-80 absolute left-0 text-sm">
        Your E-mail
      </label>
      <div className="css-1f8s93c e1lph2lf1" />
    </div>
  );
}
