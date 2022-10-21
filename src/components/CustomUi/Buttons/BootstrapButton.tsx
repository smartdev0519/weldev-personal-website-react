import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

export const BootstrapButton = styled(Button)<ButtonProps>(({ theme }) => ({
  boxShadow: "none",
  color: "white",
  textTransform: "none",
  fontWeight: theme.fontWeight,
  padding: "13px 40px",
  margin: "2px 0px",
  borderRadius: "25px",
  lineHeight: 1.5,
  backgroundColor: theme.selectedColor,
  fontFamily: theme.fontFamily.font1,

  "&:hover": {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    outline: "none",
  },
  "&:focus": {},
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
