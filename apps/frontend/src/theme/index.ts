import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899', // Pink
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0f172a', // Slate 900
      paper: 'rgba(30, 41, 59, 0.7)', // Slate 800 with transparency for glassmorphism
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.39)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
          boxShadow: '0 3px 5px 2px rgba(99, 102, 241, .3)',
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)',
            }
          },
        },
      },
    },
  },
});
