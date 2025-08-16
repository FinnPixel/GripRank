import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3EA1F7",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", "sans-serif"`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          fontFamily: "sans-serif",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {},
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          cursor: 'default', // Sets default cursor for the whole body
        },
      },
    },
  },
});
