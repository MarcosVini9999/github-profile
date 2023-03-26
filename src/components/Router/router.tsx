import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { DefaultPageLayout } from "@/components";
import { Home } from "@/views";
import { UserNameProvider } from "@/contexts";

export const Router: React.FC = () => {
  return (
    <UserNameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserNameProvider>
  );
};
