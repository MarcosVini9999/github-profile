import { Typography } from "@mui/material";
import React from "react";
import { FooterContainer, FooterDescription } from "./PageFooter.style";

export const PageFooter: React.FC = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        <p>Developed</p>
        <p>by</p>
        <a
          href="https://github.com/MarcosVini9999"
          target="_blank"
          rel="noreferrer"
        >
          Marcos Vinicius
        </a>
      </FooterDescription>
    </FooterContainer>
  );
};
