import React from 'react';

const SSLMonitoring: React.FC = () => {
  return (
    <svg
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      width="106.7"
      height="84"
    >
      <path fill="#EBFBF1" d="M0 0h84v84H0z" />
      <circle fill="#3BD671" cx="85.9" cy="36.7" r="20.6" />
      <path
        fill="#131A26"
        d="M96.6 7.7l-.7-5.6C84 10 69.9 8.7 60.6 0c-8.8 8.6-23.2 9.9-35.1 2.1l-.8 5.6c-.7 4.5-6 43.9 5.5 57.2C40.7 77.1 58 83.2 59.9 83.6l.7.1.7-.1c2-.4 19.3-6.6 29.8-18.7 11.5-13.3 6.1-52.7 5.5-57.2zM85.8 60.4c-8.2 9.5-21.7 15.1-25.2 16.2-3.6-1.2-17-6.7-25.2-16.2-7.2-8.3-6-34-4.4-47.4 2.6.7 6.5 1.2 11.8 1.1 9.2-.3 14.9-2.9 17.9-4.8 3 1.9 8.7 4.5 17.9 4.8 5.3.2 9.2-.4 11.8-1.1 1.4 13.5 2.6 39.1-4.6 47.4z"
      />
    </svg>
  );
};

export default React.memo(SSLMonitoring);
