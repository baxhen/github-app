import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Pagination from "@mui/material/Pagination";

import useGetUsers from "../../hooks/react-query/users/get-users";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router";

interface Props {}

const Users: React.FC<Props> = () => {
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const [since, setSince] = React.useState(0);

  const { data, isLoading, isError } = useGetUsers(page, since);

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    setSince(page * 10);
  };

  const onUserClick = (username: string) => {
    history.push(`/user/${username}`);
  };

  if (isError) {
    return (
      <Box width="100%" display="flex" justifyContent="center">
        Something gone wrong. Try again later.
      </Box>
    );
  }
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap="2rem"
      alignItems="center"
    >
      <List style={{ minWidth: "25%" }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          data?.map((user) => {
            return (
              <ListItem disablePadding>
                <ListItemButton onClick={() => onUserClick(user.login)}>
                  <ListItemText primary={`${user.id} - ${user.login} `} />
                </ListItemButton>
              </ListItem>
            );
          })
        )}
      </List>
      <Pagination count={500000} onChange={onChangePage} />
    </Box>
  );
};

export default Users;
