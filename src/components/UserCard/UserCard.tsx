import React from "react";
import Typography from "@mui/material/Typography";
import { UserCardContainer, UserImg } from "./UserCard.style";
import { UserData } from "@/config/interfaces/IUserData";
import { UserNameContext } from "@/contexts";
import { useTheme } from "@mui/material";

interface UserCardProps {
  user: UserData;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { postUserName } = React.useContext(UserNameContext);
  const theme = useTheme();

  return (
    <UserCardContainer
      onClick={() => {
        postUserName(user.login);
      }}
    >
      <UserImg src={user.avatar_url} alt="avatar_url" />
      <Typography sx={{ color: theme.palette.primary.main }}>
        {user.login}
      </Typography>
    </UserCardContainer>
  );
};
