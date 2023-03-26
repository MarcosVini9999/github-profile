import { Repo } from "@/config/interfaces/IUserData";
import React from "react";
import { RepositoryCard } from "@/components";
import { RepositoryListContainer } from "./RepositoryList.style";

interface RepositoryListProps {
  repositories?: Repo[];
}

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
}) => {
  let repositoryCounter = 0;

  return (
    <RepositoryListContainer>
      {repositories?.map((repository) => (
        <RepositoryCard repository={repository} key={repositoryCounter++} />
      ))}
    </RepositoryListContainer>
  );
};
