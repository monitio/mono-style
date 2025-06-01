// Mono-style - By Monitio
// TailwindCSS - TS (TypeScript Config)

// WARNING!!
// You need to have these installed before use:
// npm install -D tailwindcss
// npm install -D @types/tailwindcss
// npm install @tailwindcss/colors

import type { Config } from 'tailwindcss'
import colors from '@tailwindcss/colors'

const config: Config = {
  theme: {
    colors: {
      // Default Tailwind colors
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,

      // Custom color types
      'white-custom': {
        DEFAULT: '#ffffff',
        100: '#333333',
        200: '#666666',
        300: '#999999',
        400: '#cccccc',
        500: '#ffffff',
        600: '#ffffff',
        700: '#ffffff',
        800: '#ffffff',
        900: '#ffffff'
      } as const,
      'platinum': {
        DEFAULT: '#e7e7e7',
        100: '#2e2e2e',
        200: '#5d5d5d',
        300: '#8b8b8b',
        400: '#bababa',
        500: '#e7e7e7',
        600: '#ededed',
        700: '#f1f1f1',
        800: '#f6f6f6',
        900: '#fafafa'
      } as const,
      'dim-gray': {
        DEFAULT: '#656565',
        100: '#141414',
        200: '#292929',
        300: '#3d3d3d',
        400: '#525252',
        500: '#656565',
        600: '#858585',
        700: '#a3a3a3',
        800: '#c2c2c2',
        900: '#e0e0e0'
      } as const,
      'davys-gray': {
        DEFAULT: '#4d4d4d',
        100: '#0f0f0f',
        200: '#1f1f1f',
        300: '#2e2e2e',
        400: '#3d3d3d',
        500: '#4d4d4d',
        600: '#707070',
        700: '#949494',
        800: '#b8b8b8',
        900: '#dbdbdb'
      } as const,
      'red-custom': {
        DEFAULT: '#ff0000',
        100: '#330000',
        200: '#660000',
        300: '#990000',
        400: '#cc0000',
        500: '#ff0000',
        600: '#ff3333',
        700: '#ff6666',
        800: '#ff9999',
        900: '#ffcccc'
      } as const,
    }
  },
  content: [],
  plugins: [],
}

export default config
