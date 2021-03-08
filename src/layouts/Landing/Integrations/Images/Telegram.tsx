import React from 'react';

const Telegram: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="-387.985"
        y1="329.037"
        x2="-388.012"
        y2="328.974"
        gradientTransform="matrix(595.2803 0 0 -595.2803 231001.469 195879.172)"
      >
        <stop offset="0" stopColor="#37aee2" />
        <stop offset="1" stopColor="#1e96c8" />
      </linearGradient>
      <circle fill="url(#a)" cx="32" cy="32" r="32" />
      <path fill="#C8DAEA" d="M26.1 46.7c-1 0-.9-.4-1.2-1.4l-3-10 23.5-13.9" />
      <path fill="#A9C9DD" d="M26.1 46.7c.8 0 1.2-.4 1.6-.8l4.3-4.1-5.3-3.2" />
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="-387.95"
        y1="329.06"
        x2="-387.929"
        y2="329.02"
        gradientTransform="matrix(323.6656 0 0 -271.4722 125600.016 89363.398)"
      >
        <stop offset="0" stopColor="#eff7fc" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
      <path
        fill="url(#b)"
        d="M26.7 38.5L39.6 48c1.5.8 2.5.4 2.9-1.4l5.2-24.7c.5-2.2-.8-3.1-2.2-2.5L14.7 31.3c-2.1.8-2.1 2-.4 2.5l7.9 2.5 18.3-11.6c.9-.5 1.7-.2 1 .3"
      />
    </svg>
  );
};

export default React.memo(Telegram);
