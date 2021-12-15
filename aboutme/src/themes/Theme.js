import { grey, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: grey[700],
    },
    background: {
      default: grey[900],
    },
  },
});

export default Theme;