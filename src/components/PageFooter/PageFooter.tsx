import React from "react";
import { FooterContainer, FooterDescription } from "./PageFooter.style";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { UserNameContext } from "@/contexts";

export const PageFooter: React.FC = () => {
  const theme = useTheme();
  const { postUserName } = React.useContext(UserNameContext);

  return (
    <FooterContainer sx={{ backgroundColor: theme.palette.background.default }}>
      <FooterDescription>
        <Button
          onClick={() => {
            postUserName("MarcosVini9999");
          }}
          variant="outlined"
        >
          Marcos Vinicius
        </Button>
      </FooterDescription>
    </FooterContainer>
  );
};
