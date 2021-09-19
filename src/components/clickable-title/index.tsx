import { darken, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ClickableTitle = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: darken("#fff", 0.1),
  },
}));

export default ClickableTitle;
