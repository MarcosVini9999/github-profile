import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { UserNameContext } from "@/contexts";
import { SearchBarContainer, SearchBarForm } from "./SearchBar.style";

export const SearchBar: React.FC = () => {
  const { postUserName } = React.useContext(UserNameContext);
  const [userName, setUserName] = React.useState<string>("");

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") postUserName(userName);
  };

  return (
    <SearchBarContainer>
      <SearchBarForm>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search User Name"
            inputProps={{ "aria-label": "search user name" }}
            value={userName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(event.target.value);
            }}
            onKeyDown={keyPress}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => {
              postUserName(userName);
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </SearchBarForm>
    </SearchBarContainer>
  );
};
