import { Repo } from "@/config/interfaces/IUserData";
import React from "react";
import { RepositoryCardContainer } from "./RepositoryCard.style";

interface RepositoryCardProps {
  repository: Repo;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repository,
}) => {
  return (
    <RepositoryCardContainer>
      <a href={repository.html_url} target="_blank">
        {repository.name}
      </a>
      <p>{repository.updated_at}</p>
      <p>{repository.language}</p>
      <p>{repository.description}</p>
    </RepositoryCardContainer>
  );
};
