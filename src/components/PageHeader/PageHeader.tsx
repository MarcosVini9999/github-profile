import React from "react";
import { HeaderContainer, LogoLink } from "./PageHeader.style";
import { Switch } from "@/components";
import { ThemeContext } from "@/contexts";
import { useTheme } from "@mui/material/styles";

export const PageHeader: React.FC = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  const theme = useTheme();

  return (
    <HeaderContainer sx={{ backgroundColor: theme.palette.background.default }}>
      <LogoLink to="/" id="logo" sx={{ color: theme.palette.text.primary }}>
        Github Profiles
      </LogoLink>
      <Switch onClick={toggleTheme} />
    </HeaderContainer>
  );
};
