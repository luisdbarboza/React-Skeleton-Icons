import React from "react";

export default function SkeletonIcon({
  icon: Icon,
  width = "70px",
  height = "70px",
  loading = true,
}) {
  if (loading) {
    return (
      <svg width={width} height={height}>
        <defs>
          <linearGradient id="bg">
            <stop offset="0%" stopColor="gray">
              <animate
                attributeName="stop-color"
                values="gray;lightgray"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="50%" stopColor="lightgray">
              <animate
                attributeName="stop-color"
                values="lightgray;gray"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>

        <Icon fill="url(#bg)" />
      </svg>
    );
  } else {
    return (
      <svg width={width} height={height}>
        <Icon />
      </svg>
    );
  }
}
