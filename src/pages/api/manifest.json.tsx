import { NextApiHandler } from 'next';

import { title } from '@src/configuration';
import { base as baseTheme } from '@src/theme/themes';

const API: NextApiHandler = (req, res) => {
  res.status(200).json({
    name: title,
    short_name: title,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: baseTheme.palette.primary.main,
    background_color: baseTheme.palette.background.default,
    display: 'standalone',
    start_url: '/',
    orientation: 'portrait',
  });
};

export default API;
