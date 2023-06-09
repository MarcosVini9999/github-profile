import React from "react";
import { RepositoryListContainer } from "./RepositoryList.style";
import { Repo } from "@/config/interfaces/IUserData";
import { RepositoryCard } from "@/components";
import { useTheme } from "@mui/material/styles";

interface RepositoryListProps {
  repositories?: Repo[];
}

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
}) => {
  const theme = useTheme();

  return (
    <RepositoryListContainer
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: `${theme.palette.background.paper} 0px 30px 60px -12px inset, ${theme.palette.background.paper} 0px 18px 36px -18px inset`,
      }}
    >
      {repositories?.map((repository, index) => (
        <RepositoryCard repository={repository} key={index} />
      ))}
    </RepositoryListContainer>
  );
};
