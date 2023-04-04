import { styled } from "@mui/system";

export const LoadingContainer = styled("div")({
  "& span": {
    position: "relative",
    display: "inline-block",
    fontSize: "40px",
    textTransform: "uppercase",
    animation: "flip 2s infinite",
    animationDelay: "calc(.2s * var(--i))",
  },
  "@keyframes flip": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});
