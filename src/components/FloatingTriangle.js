// components/FloatingTriangle.js
import React from 'react';

const FloatingTriangle = ({ height, width, startColor, endColor }) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const points = `${halfWidth},${halfHeight - halfHeight} ${halfWidth + halfWidth},${halfHeight + halfHeight} ${halfWidth - halfWidth},${halfHeight + halfHeight}`;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <polygon points={points} fill="none" stroke={`url(#triangleGradient-${startColor}-${endColor})`} strokeWidth="2" />
      <defs>
        <linearGradient id={`triangleGradient-${startColor}-${endColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor }} />
          <stop offset="100%" style={{ stopColor: endColor }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FloatingTriangle;
