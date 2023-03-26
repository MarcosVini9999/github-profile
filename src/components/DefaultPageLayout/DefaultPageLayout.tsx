import React from "react";
import { PageFooter, PageHeader, SearchBar } from "@/components";
import { DefaultPageLayoutContainer } from "./DefaultPageLayout.style";
import { Outlet } from "react-router-dom";

export const DefaultPageLayout: React.FC = () => {
  return (
    <DefaultPageLayoutContainer>
      <PageHeader />
      <SearchBar />
      <Outlet />
      <PageFooter />
    </DefaultPageLayoutContainer>
  );
};
