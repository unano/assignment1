import React from "react";
import "./arror.css";

const Arror = ({ color, text }) => {
  return (
    <>
      <svg className="arror">
        <g transform="translate(70,0)  rotate(45)">
          <rect
            className="rect01"
            x="0"
            y="12.2"
            width="170.6"
            height="70.6"
            fill={color}
          />
          <g transform="translate(100,-200) rotate(45)">
            <rect
              className="rect02"
              x="200"
              y="100"
              width="50"
              height="50"
              fill={color}
            />
          </g>
          <text x="12" y="52" className="arrorWord">
            {text}
          </text>
        </g>
      </svg>
    </>
  );
};

export default Arror;
