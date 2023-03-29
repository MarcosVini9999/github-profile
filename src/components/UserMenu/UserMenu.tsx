import React from "react";
import { RepositoryList, UserMenuButton, UsersList } from "@/components";
import { UserMenuContainer, UserMenuController } from "./UserMenu.style";
import { UserNameContext } from "@/contexts";

export const UserMenu: React.FC = () => {
  const userMenuOptions = ["Repositories", "Followers", "Following", "Stars"];
  const [userMenu, setUserMenu] = React.useState<string>("Repositories");
  const { usersData } = React.useContext(UserNameContext);

  const handleUserMenu = (value: string) => {
    setUserMenu(value);
  };

  return (
    <UserMenuContainer>
      <UserMenuController>
        {userMenuOptions.map((option, index) => (
          <UserMenuButton value={option} onClick={handleUserMenu} key={index} />
        ))}
      </UserMenuController>
      <div>
        {userMenu === userMenuOptions[0] ? (
          <RepositoryList repositories={usersData?.repos_list} />
        ) : null}
        {userMenu === userMenuOptions[1] ? (
          <UsersList users={usersData?.followers_list} />
        ) : null}
        {userMenu === userMenuOptions[2] ? (
          <UsersList users={usersData?.following_list} />
        ) : null}
        {userMenu === userMenuOptions[3] ? (
          <RepositoryList repositories={usersData?.stars_list} />
        ) : null}
      </div>
    </UserMenuContainer>
  );
};
