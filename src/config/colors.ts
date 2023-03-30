import { createTheme, Theme } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

export const theme: Theme = createTheme({
  customColors: {
    primary: yellow[700],
    secondary: grey[50],
    tertiary: grey[400],
    colorText: grey[900],
  },
});
