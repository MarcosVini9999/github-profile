import { Repo } from "@/config/interfaces/IUserData";
import React from "react";
import { RepositoryCard } from "@/components";
import { RepositoryListContainer } from "./RepositoryList.style";
import { useTheme } from "@mui/material/styles";

interface RepositoryListProps {
  repositories?: Repo[];
}

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
}) => {
  const theme = useTheme();
  let repositoryCounter = 0;

  return (
    <RepositoryListContainer
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: `${theme.palette.background.paper} 0px 30px 60px -12px inset, ${theme.palette.background.paper} 0px 18px 36px -18px inset`,
      }}
    >
      {repositories?.map((repository) => (
        <RepositoryCard repository={repository} key={repositoryCounter++} />
      ))}
    </RepositoryListContainer>
  );
};
