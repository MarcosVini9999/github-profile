import { styled } from "@mui/system";

export const FooterContainer = styled("footer")({
  display: "flex",
  justifyContent: "center",
});

export const FooterDescription = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& p": {
    margin: "0px",
  },
});
