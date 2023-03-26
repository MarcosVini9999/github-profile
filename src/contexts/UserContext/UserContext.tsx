import { UserData } from "@/config/interfaces/IUserData";
import apiGithub from "@/services/apiGithub";
import React from "react";

interface UserNameContextProps {
  usersData?: UserData;
  postUserName: (userName: string) => void;
}

interface UserNameProviderProps {
  children: React.ReactNode;
}

export const UserNameContext = React.createContext({} as UserNameContextProps);

export const UserNameProvider: React.FC<UserNameProviderProps> = ({
  children,
}) => {
  const [usersData, setUsersData] = React.useState<UserData>();

  const fetchData = async (userName: string) => {
    try {
      const result = await apiGithub.get(`/users/${userName}`);
      const stars = await apiGithub.get(`/users/${userName}/starred`);
      const repos = await apiGithub.get(`/users/${userName}/repos`);
      const followers = await apiGithub.get(`/users/${userName}/followers`);
      const following = await apiGithub.get(`/users/${userName}/following`);
      const userData = {
        ...result.data,
        stars: stars.data.length,
        repos_list: repos.data,
        stars_list: stars.data,
        followers_list: followers.data,
        following_list: following.data,
      };
      setUsersData(userData);
    } catch (e) {
      console.log(e);
    }
  };

  const postUserName = (userName: string) => {
    fetchData(userName);
  };

  return (
    <UserNameContext.Provider
      value={{
        usersData,
        postUserName,
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};
