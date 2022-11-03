import React from "react";

export default function Button({ children, variant, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "normal"
          ? "bg-transparent text-zinc-700  border-transparent"
          : variant === "outlined"
          ? "border-zinc-700 text-zinc-700"
          : "bg-primary text-white border-primary"
      } relative  overflow-hidden focus:outline-none items-center justify-center cursor-pointer leading-4 transition-250ms border-solid border px-7 py-3 inline-block ${className}`}
    >
      <span className="z-50 py-0.5 relative pointer-events-none">
        {" "}
        {children}
      </span>
    </button>
  );
}
