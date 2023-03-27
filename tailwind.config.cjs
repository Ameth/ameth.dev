/** @type {import('tailwindcss').Config} */

// const remark = require('remark')

// import { remark } from 'remark'

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  corePlugins: {
    order: false,
    listStyleType: false,
  },
  // transform: {
  //   md: (content) => {
  //     return remark().process(content)
  //   },
  // },
  plugins: [],
}
