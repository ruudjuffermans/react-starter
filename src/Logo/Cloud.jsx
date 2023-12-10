import * as React from "react";
const Cloud = ({ color, height = 50, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : height * 1.65161290323}
      height={width ? width / 1.65161290323 : width}
      viewBox="0 0 384 232.5"
      {...props}
    >
      <defs>
        <clipPath id="cloud-a">
          <path d="M.41 108.172h123.606v123.605H.41Zm0 0" />
        </clipPath>
        <clipPath id="cloud-b">
          <path d="M62.215 108.172C28.082 108.172.41 135.844.41 169.977c0 34.132 27.672 61.8 61.805 61.8 34.133 0 61.8-27.668 61.8-61.8 0-34.133-27.667-61.805-61.8-61.805Zm0 0" />
        </clipPath>
        <clipPath id="cloud-c">
          <path d="M62.215.223h154.504V154.73H62.215Zm0 0" />
        </clipPath>
        <clipPath id="cloud-d">
          <path d="M139.469.223c-42.668 0-77.254 34.59-77.254 77.254 0 42.668 34.586 77.253 77.254 77.253 42.664 0 77.25-34.585 77.25-77.253 0-42.665-34.586-77.254-77.25-77.254Zm0 0" />
        </clipPath>
        <clipPath id="cloud-e">
          <path d="M178.41 37.305h117.422V154.73H178.41Zm0 0" />
        </clipPath>
        <clipPath id="cloud-f">
          <path d="M237.121 37.305c-32.426 0-58.71 26.289-58.71 58.715 0 32.425 26.284 58.71 58.71 58.71s58.711-26.285 58.711-58.71c0-32.426-26.285-58.715-58.71-58.715Zm0 0" />
        </clipPath>
        <clipPath id="cloud-g">
          <path d="M241.387 85.969h142.199v145.808h-142.2Zm0 0" />
        </clipPath>
        <clipPath id="cloud-h">
          <path d="M312.488 85.969c-39.27 0-71.101 32.64-71.101 72.906 0 40.262 31.832 72.902 71.101 72.902 39.266 0 71.102-32.64 71.102-72.902 0-40.266-31.836-72.906-71.102-72.906Zm0 0" />
        </clipPath>
        <clipPath id="cloud-i">
          <path d="M62.215 111.121h250.273v120.656H62.215Zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#cloud-a)">
        <g clipPath="url(#cloud-b)">
          <path fill={color} d="M.41 108.172h123.606v123.605H.41Zm0 0" />
        </g>
      </g>
      <g clipPath="url(#cloud-c)">
        <g clipPath="url(#cloud-d)">
          <path fill={color} d="M62.215.223h154.504V154.73H62.215Zm0 0" />
        </g>
      </g>
      <g clipPath="url(#cloud-e)">
        <g clipPath="url(#cloud-f)">
          <path fill={color} d="M178.41 37.305h117.422V154.73H178.41Zm0 0" />
        </g>
      </g>
      <g clipPath="url(#cloud-g)">
        <g clipPath="url(#cloud-h)">
          <path fill={color} d="M241.387 85.969H383.59v145.808H241.387Zm0 0" />
        </g>
      </g>
      <g clipPath="url(#cloud-i)">
        <path fill={color} d="M62.215 111.121h250.273v120.656H62.215Zm0 0" />
      </g>
    </svg>
  );
};

export default Cloud;
