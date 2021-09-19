import React from "react";
import { useParams } from "react-router";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

import useGetUser from "../../hooks/react-query/users/get-user";
import useGetUserRepos from "../../hooks/react-query/users/get-user-repos";
import { columns } from "./config-objects";

interface Props {}

const UserDetails: React.FC<Props> = () => {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, isError } = useGetUser(username);
  const { data: repos } = useGetUserRepos(username);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return (
      <Box width="100%" display="flex" justifyContent="center">
        Something gone wrong. Try again later.
      </Box>
    );
  }
  return (
    <Box padding="2rem">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div" color="primary">
            {data?.id} - {data?.login}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Created at:{" "}
            {new Date(
              data?.created_at || "2008-01-14T04:33:35Z"
            ).toLocaleString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant="h5"
            component="a"
            href={data?.html_url}
            color="primary"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            Profile url
          </Typography>
        </CardActions>
      </Card>

      <div style={{ height: 400, width: "100%", marginTop: "2rem" }}>
        <DataGrid
          rows={repos || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default UserDetails;
