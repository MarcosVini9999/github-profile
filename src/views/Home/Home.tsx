import { UserMenu } from "@/components";
import { UserNameContext } from "@/contexts";
import React from "react";
import { HomeContainer } from "./Home.style";

export const Home: React.FC = () => {
  const { usersData } = React.useContext(UserNameContext);

  console.log("renderizou");
  return (
    <HomeContainer>
      <div>
        <img src={usersData?.avatar_url} alt="user_image" />
        <p>{usersData?.name}</p>
        <p>{usersData?.login}</p>
        <p>{usersData?.bio}</p>
        <p>{usersData?.company}</p>
        <p>followers: {usersData?.followers}</p>
        <p>following: {usersData?.following}</p>
        <p>starred: {usersData?.stars}</p>
      </div>
      <UserMenu />
    </HomeContainer>
  );
};
