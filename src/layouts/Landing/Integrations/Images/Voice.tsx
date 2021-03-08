import React from 'react';

const Voice: React.FC = () => {
  return (
    <svg
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <circle fill="#3BD671" cx="22.8" cy="35.3" r="13.9" />
      <path
        fill="#FFF"
        d="M36.9 36.9c-6.3 6.3-13.7 12.4-16.6 9.5-4.2-4.2-6.7-7.8-15.9-.4-9.2 7.4-2.1 12.3 1.9 16.3 4.6 4.6 21.9.2 39-16.9 17.2-17.1 21.6-34.4 17-39-4-4-8.9-11-16.3-1.9s-3.7 11.7.4 15.9c2.9 2.8-3.2 10.2-9.5 16.5z"
      />
    </svg>
  );
};

export default React.memo(Voice);
