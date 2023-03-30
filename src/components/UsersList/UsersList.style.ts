import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const UsersListContainer = styled(Box)({
  overflowY: "scroll",
  height: "400px",
  "@media (min-height: 640px)": {
    height: "500px",
  },
});
