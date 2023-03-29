import { styled } from "@mui/system";

export const LoadingContainer = styled("div")({
  "& span": {
    position: "relative",
    display: "inline-block",
    fontSize: "40px",
    color: "#fff",
    textTransform: "uppercase",
    animation: "flip 2s infinite",
    animationDelay: "calc(.2s * var(--i))",
  },
  "@keyframes flip": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "80%": {
      transform: "rotateY(360deg)",
    },
  },
});
