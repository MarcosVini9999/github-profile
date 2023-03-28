import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const RepositoryListContainer = styled(Box)({
  overflowY: "scroll",
  height: "400px",
  "@media (min-height: 640px)": {
    height: "300px",
  },
});
