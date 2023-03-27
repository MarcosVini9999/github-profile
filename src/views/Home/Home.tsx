import { UserMenu } from "@/components";
import { UserNameContext } from "@/contexts";
import React from "react";
import { HomeContainer, UserSummary } from "./Home.style";

export const Home: React.FC = () => {
  const { usersData } = React.useContext(UserNameContext);

  console.log("renderizou");
  return (
    <HomeContainer>
      <UserSummary>
        <img src={usersData?.avatar_url} alt="user_image" />
        <p>{usersData?.name}</p>
        <p>{usersData?.login}</p>
        <p>{usersData?.bio}</p>
        <p>{usersData?.company}</p>
        <p>followers: {usersData?.followers}</p>
        <p>following: {usersData?.following}</p>
        <p>starred: {usersData?.stars}</p>
        <a href={usersData?.html_url} target="_blank">
          GitHub Page
        </a>
      </UserSummary>
      <UserMenu />
    </HomeContainer>
  );
};
