import { UserData } from "@/config/interfaces/IUserData";
import React from "react";
import { UserCardContainer } from "./UserCard.style";

interface UserCardProps {
  user: UserData;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <UserCardContainer>
      <a href={user.html_url} target="_blank">
        {user.login}
      </a>
    </UserCardContainer>
  );
};
