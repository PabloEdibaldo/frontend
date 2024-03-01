import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
<<<<<<< HEAD

=======
    'node_modules/flowbite-react/lib/esm/**/*.js'
>>>>>>> angel
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
<<<<<<< HEAD
  plugins: [nextui()],
=======
  plugins: [require('flowbite/plugin',),nextui()],
>>>>>>> angel
}

