import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  height: "auto",
  background: theme.selectedColor,
  color: "white",
  padding: "10px 40px",
  textDecoration: "none",
  borderRadius: "50px",
  textAlign: "center",
  fontFamily: "Poppins",
  transition: "all .3s ease",
}));
