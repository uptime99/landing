import React from 'react';

const Voice: React.FC = () => {
  return (
    <svg
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <circle fill="#3BD671" cx="13.9" cy="19.4" r="13.9" />
      <path
        fill="#FFF"
        d="M9.7 16.8c1.5.8 22.6 12.2 23.4 12.6.8.4 1.8.6 2.8.6s2-.2 2.8-.6c.8-.4 21.9-11.8 23.4-12.6 1.5-.8 3-3.4.2-3.4H9.5c-2.8 0-1.4 2.6.2 3.4zM62.8 23c-1.7.9-23 12-24.1 12.6-1.1.6-1.8.6-2.8.6s-1.8-.1-2.8-.6C32 35.1 10.8 24 9 23c-1.2-.6-1.2.1-1.2.7v22.9c0 1.3 1.7 3 3.1 3h50c1.4 0 3.1-1.7 3.1-3V23.7c0-.6 0-1.3-1.2-.7z"
      />
    </svg>
  );
};

export default React.memo(Voice);
