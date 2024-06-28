# blog-web
it is simple react project

## dependency

npm create vite@latest blog-web

npm install

npm react-route-dom

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p


## tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

