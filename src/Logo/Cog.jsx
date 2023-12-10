import * as React from "react";
import { useEffect, useState } from "react";
const Cog = ({ size = 100, color = "#38b6ff", ...props }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Set up an interval to change the position state
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => {
        // If the position is 100, reset it to 0
        if (prevPosition >= 100) {
          clearInterval(intervalId);
          return 0;
        }
        // Otherwise, increment the position by 1
        return prevPosition + 1;
      });
    }, 10); // Adjust the interval to control the speed of the animation

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      {...props}
    >
      <g>
        <g>
          <path
            fill={color}
            d="M12.469 14.516c0-.332.066-.649.191-.957a2.518 2.518 0 0 1 2.309-1.543c.332 0 .652.062.957.191.308.125.578.309.812.543.235.234.414.504.54.809.128.308.19.625.19.957 0 .332-.062.652-.19.957a2.462 2.462 0 0 1-1.352 1.351 2.434 2.434 0 0 1-.957.192c-.332 0-.649-.063-.957-.192a2.446 2.446 0 0 1-.809-.539 2.506 2.506 0 0 1-.734-1.77Zm0 0"
          />
          <g clipPath="url(#e)">
            <path
              fill={color}
              d="m1.059 16.992 3.492.656c.215.707.492 1.383.836 2.024l-2.02 2.953a.754.754 0 0 0 .086.922l2.492 2.492c.235.234.645.27.918.086l2.957-2.023a11.04 11.04 0 0 0 2.082.851l.653 3.477c.062.324.379.59.71.59h3.524a.754.754 0 0 0 .711-.59l.66-3.512c.7-.215 1.367-.492 2-.836l2.918 2a.748.748 0 0 0 .918-.086l2.492-2.496a.748.748 0 0 0 .086-.918l-2.008-2.937c.336-.63.614-1.301.82-1.997l3.497-.656a.747.747 0 0 0 .586-.71v-3.524a.75.75 0 0 0-.586-.711l-3.492-.656a10.974 10.974 0 0 0-.84-2.04l1.984-2.902a.748.748 0 0 0-.086-.918l-2.492-2.496a.748.748 0 0 0-.918-.082l-2.902 1.985a10.91 10.91 0 0 0-1.98-.825L17.5.602a.75.75 0 0 0-.71-.586h-3.528a.754.754 0 0 0-.711.586l-.649 3.48a10.72 10.72 0 0 0-2.062.84L6.898 2.91a.748.748 0 0 0-.918.086L3.488 5.484a.754.754 0 0 0-.086.922l2 2.922a10.982 10.982 0 0 0-.855 2.063l-3.488.656a.754.754 0 0 0-.59.71v3.524a.75.75 0 0 0 .59.711Zm13.91-8.527c3.34 0 6.05 2.71 6.05 6.05s-2.71 6.051-6.05 6.051a6.05 6.05 0 0 1-6.047-6.05 6.05 6.05 0 0 1 6.047-6.051Zm0 0"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Cog;
