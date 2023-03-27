import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { DefaultPageLayout } from "@/components";
import { Home } from "@/views";
import { ThemeContext, UserNameProvider } from "@/contexts";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { themeColors } from "@/config/themes/themeColors";

export const Router: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const colors = React.useMemo(() => themeColors(theme), [theme]);

  return (
    <MuiThemeProvider theme={colors}>
      <UserNameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultPageLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserNameProvider>
    </MuiThemeProvider>
  );
};
