import { grey, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  customColors: {
    primary: yellow[700],
    secondary: grey[50],
    tertiary: grey[400],
    colorText: grey[900]
  }
});
