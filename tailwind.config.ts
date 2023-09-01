import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#161718',
        secondary: '#FFF17A',
        tertiary: '#2C2D32',
        quaternary: '#C9C9C9',
      },
    },
    screens: {
      xsm : '374px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1500px',
    },
    
  },
  plugins: [],
}
export default config
