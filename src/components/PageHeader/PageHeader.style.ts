import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const HeaderContainer = styled("header")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const LogoLink = styled(Link)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "32px",
  lineHeight: "38px",
  textDecoration: "none",
  padding: "5px",
  margin: "5px",
});
