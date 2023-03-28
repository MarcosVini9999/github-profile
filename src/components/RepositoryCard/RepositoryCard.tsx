import { Repo } from "@/config/interfaces/IUserData";
import { formatedDate } from "@/utils/date";
import { Typography, useTheme } from "@mui/material";
import React from "react";
import { RepositoryCardContainer } from "./RepositoryCard.style";

interface RepositoryCardProps {
  repository: Repo;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repository,
}) => {
  const theme = useTheme();

  return (
    <RepositoryCardContainer
      onClick={() => {
        window.open(`${repository.html_url}`, "_blank");
      }}
    >
      <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
        {repository.name}
      </Typography>
      <Typography>{repository.description}</Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: theme.palette.text.secondary }}
      >
        {repository.language}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: theme.palette.text.secondary }}
      >{`Updated on ${formatedDate(repository.updated_at)}`}</Typography>
    </RepositoryCardContainer>
  );
};
