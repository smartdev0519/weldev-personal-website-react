import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import {
  AppBar,
  AppBarProps,
  Icon,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  colors,
} from "@mui/material";
import Logo from "../../assets/images/logo.png";
import { PAGES } from "../../constant";
import { styled, useTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  "&:hover": {
    color: theme.selectedColor,
  },
}));

const CustomAppBar = (props: AppBarProps) => {
  const theme = useTheme();
  const path = "/" + useLocation().pathname.split("/")[1];
  console.log("path", path);
  return (
    <AppBar {...props}>
      <Container maxWidth="xl" disableGutters sx={{ padding: "0 3%", mt: 3 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: { xs: "0", md: "0 15%" },
              alignItems: "center",
            }}
          >
            <Box>
              <img src={Logo} width="100px" height="31px" />
            </Box>
            <Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {PAGES.map((page, index) => (
                  <Box key={index} sx={{ mr: 5 }}>
                    <StyledLink
                      key={index}
                      to={page.path}
                      style={{
                        color:
                          page.path == path ? theme.selectedColor : "white",
                      }}
                    >
                      {page.name}
                    </StyledLink>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>sss</Box>
            </Box>
          </Box>
          <Box></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
