import React from "react";

export default function MenuIcon({ stickyClass }) {
  return (
    <svg
      width="32"
      height="32"
      className={`stroke-current fill-current ${
        stickyClass ? "text-gray-900" : "text-white"
      }`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33301 8H26.6663"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33301 16H18.6663"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33301 24H23.9997"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
