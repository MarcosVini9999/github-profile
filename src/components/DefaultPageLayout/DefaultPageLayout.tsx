import React from "react";
import { PageFooter, PageHeader, SearchBar } from "@/components";
import { DefaultPageLayoutContainer } from "./DefaultPageLayout.style";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export const DefaultPageLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <DefaultPageLayoutContainer
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <PageHeader />
      <SearchBar />
      <Outlet />
      <PageFooter />
    </DefaultPageLayoutContainer>
  );
};
