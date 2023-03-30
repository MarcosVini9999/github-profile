import React from "react";
import { UserMenuButtonContainer } from "./UserMenuButton.style";

interface UserMenuButtonProps {
  value: string;
  onClick: (value: string) => void;
  selected: boolean;
}

export const UserMenuButton: React.FC<UserMenuButtonProps> = ({
  value,
  onClick,
  selected,
}) => {
  return (
    <UserMenuButtonContainer
      onClick={() => {
        onClick(value);
      }}
      variant={selected ? "contained" : "outlined"}
    >
      {value}
    </UserMenuButtonContainer>
  );
};
