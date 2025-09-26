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
      'Arial',
      'Roboto',
      'Open Sans',
      'Inter',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700, fontSize: '2.0rem', letterSpacing: '-1px' },
    h2: { fontWeight: 600, fontSize: '1.8rem' },
    h3: { fontWeight: 500, fontSize: '1.5rem' },
    h4: { fontWeight: 500, fontSize: '1.2rem' },
    body1: { fontSize: '1.rem' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
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
             background: 'transparent',
            color:'white',
            border: '2px solid white',
            "&:hover": {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderColor: 'white',
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
    MuiCard: {
      styleOverrides: {
        root: {
          // Styles for the root Card element
          backgroundColor: '#f0f0f0',
          borderRadius: 8,
          border: '1px solid #000000',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          mt: 2,
          padding: '0.5rem 0.5rem',
        }
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '0.5rem 0.5rem',
        },
      },
    },
  },
});

export default theme;