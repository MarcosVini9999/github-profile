import { UserData } from "@/config/interfaces/IUserData";
import React from "react";
import { UserCard } from "@/components";
import { UsersListContainer } from "./UsersList.style";

interface UsersListProps {
  users?: UserData[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  let userCardCounter = 0;

  return (
    <UsersListContainer>
      {users?.map((user) => (
        <UserCard user={user} key={userCardCounter++} />
      ))}
    </UsersListContainer>
  );
};
