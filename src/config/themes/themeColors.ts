import { createTheme } from "@mui/material/styles";

export const themeColors = (mode: "dark" | "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#5F30E5",
      },
      background: {
        ...(mode === "dark"
          ? {
              default: "#0D1117",
              paper: "#1D2227",
            }
          : {
              default: "#C5C5C5",
              paper: "#E7E7E7",
            }),
      },
      text: {
        ...(mode === "dark"
          ? {
              primary: "#EFEFEF",
              secondary: "#C5C5C5",
              tertiary: "#787878",
            }
          : {
              primary: "#0D1117",
              secondary: "#1D2227",
              tertiary: "#787878",
            }),
      },
    },
  });
