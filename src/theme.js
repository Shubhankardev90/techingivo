import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Your primary color
      contrastText: '#ffffff', // Text color on primary background
    },
    secondary: {
      main: '#ff4081', // Your secondary color
      contrastText: '#ffffff', // Text color on secondary background
    },
    background: {
      default: '#f5f5f5', // Your default background color
      paper: '#ffffff', // Background color for paper elements
    },
    text: {
      primary: '#333333', // Your primary text color
      secondary: '#666666', // Your secondary text color
    },
    error: {
      main: '#ff1744', // Your error color
    },
    // Add more palette options as needed
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Your preferred font family
    heroHeader:{
        fontSize:'2.5rem',
        fontWeight:700,
        fontFamily:'"Montserrat", sans-serif',
        marginBottom:"0.4rem",
        lineHeight:1.2,

        '@media(max-width:650px)':{
            fontSize:'1.5rem'
        }
    },
    heroText:{
        fontSize:"1.2rem",
        fontWeight:500,
        fontFamily:'"Montserrat", sans-serif',
        '@media(max-width:650px)':{
            fontSize:'1rem'
        }
    },
    heroSecondaryHeader:{
        fontSize: '1.7rem', // Your heading 2 font size
        fontWeight: 500, // Your heading 2 font weight
        color: '#333333', // Your heading 2 color
        '@media(max-width:650px)':{
            fontSize:'1.3rem',
        }
    },
    sectionHeading:{
      fontSize:'1rem',
      fontWeight:500,
      display:'block',
    },
    sectionDescription:{
      fontSize:'2rem',
      display:'block',
      marginTop:'-0.5rem',
      marginBottom:'1rem',
      '@media (max-width: 650px)':{
        fontSize:'1.5rem'
      }
    },
    h1: {
      fontSize: '2.5rem', // Your heading 1 font size
      fontWeight: 600, // Your heading 1 font weight
      color: '#333333', // Your heading 1 color
    },
    h2: {
      fontSize: '2rem', // Your heading 2 font size
      fontWeight: 500, // Your heading 2 font weight
      color: '#333333', // Your heading 2 color
    },
    h3: {
      fontSize: '1.7rem', // Your heading 2 font size
      fontWeight: 500, // Your heading 2 font weight
      color: '#333333', // Your heading 2 color
    },
    h4: {
      fontSize: '1.5rem', // Your heading 2 font size
      fontWeight: 500, // Your heading 2 font weight
      color: '#333333', // Your heading 2 color
    },
    h5: {
      fontSize: '1.3rem', // Your heading 2 font size
      fontWeight: 500, // Your heading 2 font weight
      color: '#333333', // Your heading 2 color
    },
    body:{
      fontSize:'1rem',
      fontWeight:400,
      color: '#333333',
    },
    body1:{
      color:'#7c7c7c',
    }
  },
  spacing: 8, // Your preferred spacing unit
  shape: {
    borderRadius: 8, // Your preferred border radius
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 1060,
      lg: 1280,
      xl: 1920,
    },
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.1)', // Your preferred box shadow
    '0px 4px 8px rgba(0, 0, 0, 0.1)',
    // Add more shadow options as needed
  ],
  // Add more theme properties as needed
});

export default Theme;
