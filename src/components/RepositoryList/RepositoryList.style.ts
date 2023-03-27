import { styled } from "@mui/system";

export const RepositoryListContainer = styled("div")({
  overflowY: "scroll",
  height: "400px",
  "@media (min-height: 640px)": {
    height: "300px",
  },
});
