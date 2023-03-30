import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const RepositoryCardContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "20px",
  inlineSize: "auto",
  overflowWrap: "break-word",
  "&:hover": {
    backgroundColor: "#5F30E5",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "& h5": {
      color: "white",
    },
  },
});
