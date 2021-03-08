import React from 'react';

const SMS: React.FC = () => {
  return (
    <svg
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <circle fill="#3BD671" cx="50.1" cy="28.1" r="13.9" />
      <path
        fill="#FFF"
        d="M44.4 0H19.6c-3.6 0-6.5 2.9-6.5 6.5v50.9c0 3.6 2.9 6.5 6.5 6.5h24.8c3.6 0 6.5-2.9 6.5-6.5V6.5C50.9 2.9 48 0 44.4 0zM32 61.4c-2.5 0-4.6-1.5-4.6-3.3 0-1.8 2-3.3 4.6-3.3 2.5 0 4.6 1.5 4.6 3.3 0 1.8-2.1 3.3-4.6 3.3zm13.7-9.8H18.3V8.5h27.4v43.1z"
      />
    </svg>
  );
};

export default React.memo(SMS);
