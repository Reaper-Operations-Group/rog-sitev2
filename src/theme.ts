'use client';
import { Roboto } from 'next/font/google';
import { experimental_extendTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#d44141',
        },
        secondary: {
          main: '#1f67c9',
        },
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#d44141',
        },
        secondary: {
          main: '#1f67c9',
        },
      }
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;