import { UserData } from "@/config/interfaces/IUserData";
import React from "react";
import { UserCard } from "@/components";
import { UsersListContainer } from "./UsersList.style";
import { useTheme } from "@mui/material/styles";

interface UsersListProps {
  users?: UserData[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const theme = useTheme();

  return (
    <UsersListContainer
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: `${theme.palette.background.paper} 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
      }}
    >
      {users?.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </UsersListContainer>
  );
};
