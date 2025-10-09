const preset = require('@mfe/tailwind-config');

module.exports = {
  presets: [preset],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    '../../packages/**/*.{ts,tsx,js,jsx,css,mdx}', // include shared packages
  ],
};
