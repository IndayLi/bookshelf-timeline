import React from "react";

const SVGCircle = ({
  name = "",
  fill = "#FFFFFF",
  viewBox = "",
  radius = "31",
  className = "",
  }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={radius * 2}
    height={radius * 2}
    viewBox={viewBox}
    >
      <circle
      id="Ellipse_2"
      data-name="Ellipse 2"
      cx={radius}
      cy={radius}
      r={radius}
      fill={fill}
        />
    </svg>
  );

export default SVGCircle;
