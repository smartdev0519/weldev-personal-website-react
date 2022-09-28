import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

export const BootstrapButton = styled(Button)<ButtonProps>(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: theme.fontSize.xs,
  padding: "6px 12px",
  margin: "2px 0px",
  borderRadius: "10px",
  lineHeight: 1.5,
  backgroundColor: theme.button.background1,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: theme.button.background1,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    outline: "none",
    backgroundColor: theme.button.background1,
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
