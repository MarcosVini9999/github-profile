import React from "react";
import { UserMenuButtonContainer } from "./UserMenuButton.style";

interface UserMenuButtonProps {
  value: string;
  onClick: (value: string) => void;
}

export const UserMenuButton: React.FC<UserMenuButtonProps> = ({
  value,
  onClick,
}) => {
  return (
    <UserMenuButtonContainer
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </UserMenuButtonContainer>
  );
};
