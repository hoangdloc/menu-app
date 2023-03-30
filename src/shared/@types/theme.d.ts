import '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    customColors: {
      primary: string
      secondary: string
      tertiary: string
      colorText: string
    }
  }

  export interface ThemeOptions {
    customColors?: {
      primary?: string
      secondary?: string
      tertiary?: string
      colorText?: string
    }
  }

  export default function createTheme (option?: ThemeOptions): Theme;
}
