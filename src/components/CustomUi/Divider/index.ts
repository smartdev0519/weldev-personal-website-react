import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  background: "transparent",
  borderBottom: `1px dashed ${theme.palette.grey[800]}`,
}));
