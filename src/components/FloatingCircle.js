// components/FloatingCircle.js
import React from 'react';

const FloatingCircle = ({startColor, endColor}) => {
  return (
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor }} />
          <stop offset="100%" style={{ stopColor: endColor }} />
        </linearGradient>
      </defs>
      <circle cx="25" cy="25" r="20" fill="url(#gradient)" />
    </svg>
  );
};

export default FloatingCircle;
