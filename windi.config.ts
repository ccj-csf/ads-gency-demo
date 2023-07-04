import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme': '#9948fd',
      },
      borderColor: {
        'theme': '#9948fd',
      }
    },
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    // ...
  ],
})
