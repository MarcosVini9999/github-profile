import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const UserCardContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  paddingBlock: "5px",
  padding: "20px",
  "&:hover": {
    backgroundColor: "#5F30E5",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "& p": {
      color: "white",
    },
  },
});

export const UserImg = styled("img")({
  width: "10%",
  borderRadius: "50%",
  margin: "5px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
});
