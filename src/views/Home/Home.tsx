import { Loading, UserMenu } from "@/components";
import { UserNameContext } from "@/contexts";
import { Button, Typography } from "@mui/material";
import React from "react";
import { HomeContainer, UserSummary } from "./Home.style";
import { useTheme } from "@mui/material/styles";

export const Home: React.FC = () => {
  const { usersData, loading } = React.useContext(UserNameContext);
  const theme = useTheme();

  console.log("carregou");

  return (
    <HomeContainer sx={{ backgroundColor: theme.palette.background.paper }}>
      {loading.search ? (
        <Loading />
      ) : usersData?.login ? (
        <React.Fragment>
          <UserSummary>
            <img src={usersData?.avatar_url} alt="user_image" />
            <Typography>{usersData?.name}</Typography>
            <Typography>{usersData?.login}</Typography>
            <Typography>{usersData?.bio}</Typography>
            <Typography>{usersData?.company}</Typography>
            <Typography>followers: {usersData?.followers}</Typography>
            <Typography>following: {usersData?.following}</Typography>
            <Typography>starred: {usersData?.stars}</Typography>
            <Button
              onClick={() => {
                window.open(`${usersData?.html_url}`, "_blank");
              }}
              variant="outlined"
            >
              GitHub Page
            </Button>
          </UserSummary>
          <UserMenu />
        </React.Fragment>
      ) : loading.error ? (
        <h1>Usuário não encontrado</h1>
      ) : (
        <h1>Bem vindo</h1>
      )}
    </HomeContainer>
  );
};
