import { UserData } from "@/config/interfaces/IUserData";
import apiGithub from "@/services/apiGithub";
import React from "react";

interface UserNameContextProps {
  usersData: UserData;
  postUserName: (userName: string) => void;
  loading: Loading;
}

interface UserNameProviderProps {
  children: React.ReactNode;
}

interface Loading {
  search: boolean;
  error: boolean;
}

export const UserNameContext = React.createContext({} as UserNameContextProps);

export const UserNameProvider: React.FC<UserNameProviderProps> = ({
  children,
}) => {
  const [data, setData] = React.useState({} as UserData);
  const [loading, setLoading] = React.useState<Loading>({
    search: false,
    error: false,
  });
  const usersData: UserData = React.useMemo(() => data, [data]);

  const fetchData = async (userName: string) => {
    setLoading({
      search: true,
      error: false,
    });
    try {
      const result = await apiGithub.get(`/${userName}`);
      const stars = await apiGithub.get(`/${userName}/starred`);
      const repos = await apiGithub.get(`/${userName}/repos`);
      const followers = await apiGithub.get(`/${userName}/followers`);
      const following = await apiGithub.get(`/${userName}/following`);
      const userData = {
        ...result.data,
        stars: stars.data.length,
        repos_list: repos.data,
        stars_list: stars.data,
        followers_list: followers.data,
        following_list: following.data,
      };
      setData(userData);
    } catch (e) {
      console.log(e);
      setLoading({
        search: false,
        error: true,
      });
      setData({} as UserData);
    } finally {
      setLoading((oldStatus) => ({ ...oldStatus, search: false }));
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
        loading,
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};
