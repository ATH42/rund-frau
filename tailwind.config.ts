import tailwindcssAnimate from 'tailwindcss-animate'

import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'variable-collection-dark-beige': 'var(--variable-collection-dark-beige)',
        'variable-collection-dark-blue': 'var(--variable-collection-dark-blue)',
        'variable-collection-dark-brown': 'var(--variable-collection-dark-brown)',
        'variable-collection-dark-grey': 'var(--variable-collection-dark-grey)',
        'variable-collection-dark-orange': 'var(--variable-collection-dark-orange)',
        'variable-collection-dark-purple': 'var(--variable-collection-dark-purple)',
        'variable-collection-light-beige': 'var(--variable-collection-light-beige)',
        'variable-collection-light-blue': 'var(--variable-collection-light-blue)',
        'variable-collection-light-brown': 'var(--variable-collection-light-brown)',
        'variable-collection-light-grey': 'var(--variable-collection-light-grey)',
        'variable-collection-light-orange': 'var(--variable-collection-light-orange)',
        'variable-collection-light-purple': 'var(--variable-collection-light-purple)',
        'variable-collection-mid-blue': 'var(--variable-collection-mid-blue)',
        'variable-collection-middle-beige': 'var(--variable-collection-middle-beige)',
        'variable-collection-middle-brown': 'var(--variable-collection-middle-brown)',
        'variable-collection-middle-dark-purple': 'var(--variable-collection-middle-dark-purple)',
        'variable-collection-middle-grey': 'var(--variable-collection-middle-grey)',
        'variable-collection-middle-orange': 'var(--variable-collection-middle-orange)',
        'variable-collection-middle-purple': 'var(--variable-collection-middle-purple)',
        'variable-collection-transparent-black': 'var(--variable-collection-transparent-black)',
        'variable-collection-transparent-dark-purple':
          'var(--variable-collection-transparent-dark-purple)',
        'variable-collection-white': 'var(--variable-collection-white)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: '#B9517A',
          light: '#DEABBF',
          dark: '#6D2C48',
          darker: '#3B1427',
        },
        accent: {
          DEFAULT: '#FFCC84',
          light: '#FFA86B',
          dark: '#C8691C',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        'body-small': 'var(--body-small-font-family)',
        h1: 'var(--h1-font-family)',
        'h1-new': 'var(--h1-new-font-family)',
        h2: 'var(--h2-font-family)',
        overschrift: 'var(--overschrift-font-family)',
        text: 'var(--text-font-family)',
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        'ink-blossoms': ['Ink Blossoms', 'sans-serif'],
      },
      fontSize: {
        header: '40px',
        subheader: '24px',
        content: '20px',
        accent: '16px',
      },
      boxShadow: {
        'shadow-1': 'var(--shadow-1)',
        'shadow-navbar': 'var(--shadow-navbar)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default tailwindConfig
