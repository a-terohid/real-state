import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      "Green": "#223843",
      "orange": "#D77A61",
      "Lorange": "#D8B4A0",
      "pinkBrown" : "#DBD3D8",
      "wg" : "#EFF1F3",
      "f6" :"#f6f6f6"
     }
    },
    container : {
      center : true,
      padding: "2rem"
    },
  },
  plugins: [],
}
export default config
