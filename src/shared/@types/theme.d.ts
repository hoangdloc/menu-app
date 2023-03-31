import '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    customColors: {
      colorPrimary: string
      bgColorPrimary: string
      textColorSecondary: string
      textColorPrimary: string
    }
  }

  export interface ThemeOptions {
    customColors?: {
      colorPrimary?: string
      bgColorPrimary?: string
      textColorSecondary?: string
      textColorPrimary?: string
    }
  }

  export default function createTheme (option?: ThemeOptions): Theme;
}
