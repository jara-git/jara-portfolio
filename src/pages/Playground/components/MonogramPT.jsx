import React from "react";

const MonogramPT = ({
    headX,
    headY,
    armRot,
    armCurve,
    legRot,
    bodyX,
    bodyY,
    round,
    strokeWidth,
    fillColor,
    strokeColor,
    // fontVariant,
}) => {
    return (
        <svg viewBox="0 0 320 300">
            <g id="all">
                <circle
                    cx={headX}
                    cy={headY}
                    r="20"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
                <path
                    d={`M100,100 
              C${100 + armCurve},100 ${180 - armCurve},100 220,100 
              L220,118 
              C${180 - armCurve},118 ${100 + armCurve},118 100,118 Z`}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    transform={`rotate(${armRot},100,100)`}
                />
                <rect
                    x={bodyX - 20}
                    y={bodyY}
                    width="18"
                    height="150"
                    rx={round}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    transform={`rotate(${legRot},${bodyX},${bodyY})`}
                />
                <path
                    d={`M ${bodyX} ${bodyY} h60 a30 30 0 0 1 0 60 h-60 z`}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
            </g>
        </svg>
    );
};

export default MonogramPT;
