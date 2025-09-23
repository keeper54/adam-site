// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#223354', // Navy
      light: '#f5f7fa', // Very light gray
      contrastText: '#000000',
    },
    secondary: {
      main: '#4F8A8B', // Teal accent
    },
    background: {
      default: '#D3D3D3', // Light background
      paper: '#fff',
    },
    text: {
      primary: '#36454F',
      secondary: '#4F8A8B',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Open Sans',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-1px' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 500, fontSize: '1.5rem' },
    body1: { fontSize: '1.1rem' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#D3D3D3',
          color: '#223354',
          boxShadow: '0 2px 8px rgba(34,51,84,0.04)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#223354',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#4F8A8B',
          },
        },
        outlinedPrimary: {
          borderColor: '#223354',
          color: '#223354',
          '&:hover': {
            borderColor: '#4F8A8B',
            backgroundColor: '#f5f7fa',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(34,51,84,0.06)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#4F8A8B',
          fontWeight: 500,
          '&:hover': {
            textDecoration: 'underline',
            color: '#223354',
          },
        },
      },
    },
  },
});

export default theme;