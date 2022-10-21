import React, { ReactElement, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CustomAppBar from "./appBar";
import {
  AppBar,
  AppBarProps,
  Toolbar,
  Typography,
  Box,
  Container,
  Theme,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const theme = useTheme();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      direction="down"
      in={trigger}
      timeout={{
        enter: theme.transitions.duration.standard,
        exit: theme.transitions.duration.standard,
      }}
      easing={theme.transitions.easing.easeOut}
    >
      {children}
    </Slide>
  );
}

const AppbarContent = (
  <Container
    maxWidth="lg"
    sx={{ mt: 3, px: { xs: "3%", md: "100px" } }}
    disableGutters
  >
    <Toolbar disableGutters>
      <CustomAppBar />
    </Toolbar>
  </Container>
);

export default function Header() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ background: (theme: Theme) => theme.palette.common.black }}
      >
        {AppbarContent}
      </AppBar>

      <HideOnScroll>
        <AppBar position="fixed" sx={{ background: "#000000db" }}>
          {AppbarContent}
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
