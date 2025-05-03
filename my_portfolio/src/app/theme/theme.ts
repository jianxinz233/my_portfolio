import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#88B04B",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f7f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
