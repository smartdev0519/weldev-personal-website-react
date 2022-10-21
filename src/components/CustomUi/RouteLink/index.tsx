import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: `${theme.fontFamily.font1} !important`,
  fontWeight: `${theme.fontWeight} !important`,
  height: "auto",
  background: theme.selectedColor,
  color: "white",
  padding: "10px 40px",
  textDecoration: "none",
  borderRadius: "50px",
  textAlign: "center",
  transition: "all .3s ease",
  "&:hover": {
    color: "black",
    background: "white",
  },
}));
