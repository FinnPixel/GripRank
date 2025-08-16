import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

interface UiThemeProviderProps {
  children?: JSX.Element;
}

export const UiThemeProvider = (props: UiThemeProviderProps): JSX.Element => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
