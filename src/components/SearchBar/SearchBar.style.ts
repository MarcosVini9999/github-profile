import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const SearchBarContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "10px",
});

export const SearchBarForm = styled("div")({
  "& form": {
    width: "300px",
    "@media (min-width: 480px)": {
      width: "400px",
    },
    "@media (min-width: 900px)": {
      width: "500px",
    },
    "@media (min-width: 1200px)": {
      width: "600px",
    },
  },
});
