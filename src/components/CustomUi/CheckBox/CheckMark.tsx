import React from "react";

interface Props {
  width: string;
  height: string;
  color: string;
}

const CheckMark = (props: Props) => {
  const { width, height, color } = props;
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 752 752"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="a">
          <path d="m139.21 154h473.58v444h-473.58z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          d="m609.09 163.26c-111 125.8-214.59 260.84-299.69 405.13-20.348 37-27.75 38.848-55.496 1.8516l-109.14-146.14c-18.5-27.75 9.25-35.148 40.699-7.3984l96.195 79.547c94.348-127.64 188.69-249.74 318.19-336.69 9.25-7.3984 20.348-7.3984 9.25 3.6992z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default CheckMark;
