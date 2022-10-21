import React from "react";

interface Props {
  width: string;
  height: string;
  color: string;
}

const CursorMark = (props: Props) => {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 752 752"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: color, cursor: "pointer" }}
    >
      <g>
        <path
          d="m451.002 183.574h29.997v84.853h-29.997z"
          transform="matrix(.707 -.707 .707 .707 -23.318 395.706)"
        ></path>
        <path
          d="m271.002 3.574h29.997v84.853h-29.997z"
          transform="matrix(.707 -.707 .707 .707 51.241 215.706)"
        ></path>
        <path
          d="m423.574 31.002h84.853v29.997h-84.853z"
          transform="matrix(.707 -.707 .707 .707 103.961 342.985)"
        ></path>
        <path d="m42.422 512 150.458-150.458 42.114 125.464 152.988-362.988-362.988 152.988 125.464 42.114-150.458 150.458z"></path>
        <path d="m361 0h30v61h-30z"></path>
        <path d="m451 121h61v30h-61z"></path>
      </g>
    </svg>
  );
};

export default CursorMark;
