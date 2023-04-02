import { grey, orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  customColors: {
    colorPrimary: orange[50],
    bgColorPrimary: grey[50],
    textColorSecondary: grey[400],
    textColorPrimary: grey[900]
  },
  palette: {
    primary: {
      light: orange[600],
      main: orange[700],
      dark: orange[800],
      contrastText: grey[50]
    },
    text: {
      primary: grey[800],
      secondary: grey[700]
    },
    mode: 'light'
  }
});
