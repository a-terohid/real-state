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
      "lightBlue" : "#08D9D6",
      "dark": "#252A34",
      "RED": "#FF2E63",
      "milk" : "#EAEAEA"
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
