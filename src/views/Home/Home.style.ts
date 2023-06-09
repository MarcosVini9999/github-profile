import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 992px)": {
    flexDirection: "row",
  },
});

export const UserSummary = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginBlock: "20px",
  "& img": {
    width: "50%",
    borderRadius: "50%",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    "@media (min-width: 768px)": {
      width: "30%",
    },
  },
});
