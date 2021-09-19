import React from "react";
import { useHistory } from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import ClickableTitle from "../clickable-title";

interface Props {}

const Header: React.FC<Props> = () => {
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }} mb="1rem">
      <AppBar position="static">
        <Toolbar>
          <ClickableTitle variant="h6" onClick={() => history.push("/")}>
            Github Project
          </ClickableTitle>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
