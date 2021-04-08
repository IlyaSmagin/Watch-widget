import React, { useEffect, useState, useRef } from "react";

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out";
  }, [setOffset, progress, circumference, offset]);

  return (
    <svg className="progess-svg" width={size} height={size}>
      <circle
        className="svg-circle-bg"
        stroke={circleOneStroke}
        cx={-center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth - 5}
      />
      <circle
        className="svg-circle"
        ref={circleRef}
        stroke={circleTwoStroke}
        cx={-center}
        cy={center}
        r={radius}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text x={`${center + 0}`} y={`${center + 12}`} className="svg-circle-text">
        {progress}
        <tspan dy="-8">%</tspan>
      </text>
    </svg>
  );
};

export default ProgressBar;
