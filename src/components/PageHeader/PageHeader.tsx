import React from "react";
import { Switch } from "@/components";
import { HeaderContainer } from "./PageHeader.style";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/contexts";
import { useTheme } from "@mui/material/styles";

export const PageHeader: React.FC = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  const theme = useTheme();

  return (
    <HeaderContainer sx={{ backgroundColor: theme.palette.background.default }}>
      <Link to="/" id="logo">
        Github Profiles
      </Link>
      <Switch onClick={toggleTheme} />
    </HeaderContainer>
  );
};
