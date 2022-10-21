import { useTheme } from "@mui/material/styles";
import React, { useState, useRef, useEffect } from "react";
import useAppTheme from "../../hooks/useAppTheme";
import { Box, Typography, Stack, Grow } from "@mui/material";
import { BootstrapButton } from "../../components/CustomUi/Buttons/BootstrapButton";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { PAGES } from "../../constant";
import { StyledLink } from "../../components/CustomUi/RouteLink";
import TextAnimationBox from "../../components/TextAnimations";

const Home = () => {
  const { selectedColor, setSelectedColor } = useAppTheme();
  const [color, setColor] = useState<string>("");
  const [name, setName] = useState<string>("DAVID PARKER");
  const [isMount, setIsMount] = useState<boolean>(false);
  const theme = useTheme();
  const slideContainer = useRef(null);
  const handleChangeText = (value: string) => {
    setColor(value);
  };

  const handleColorSubmit = () => {
    if (setSelectedColor) setSelectedColor(color);
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          mt: { xs: "25%", sm: "20%", md: "15%", lg: "10%" },
        }}
        ref={slideContainer}
      >
        <Grow
          in={isMount}
          easing={theme.transitions.easing.easeOut}
          timeout={theme.transitions.duration.enteringScreen}
        >
          <Stack direction="column" spacing={1}>
            <Typography
              sx={{
                fontSize: { xs: theme.fontSize.xl4, md: theme.fontSize.xl6 },
              }}
            >
              <span style={{ color: "white" }}>{"DAVID"}</span>
              <span style={{ color: theme.selectedColor }}>{" PARKER"}</span>
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: theme.fontSize.xl, md: theme.fontSize.xl2 },
              }}
            >
              <Box sx={{ mr: 2 }}>
                <span style={{ color: "grey" }}>Creative</span>
              </Box>
              <TextAnimationBox>
                <span style={{ color: "white" }}>{"Developer"}</span>
              </TextAnimationBox>
            </Stack>

            <Box>
              <Box sx={{ mt: { xs: 3, md: 4 } }}>
                <StyledLink to="/contract">Get in Touch</StyledLink>
              </Box>
            </Box>
          </Stack>
        </Grow>
      </Box>
    </>
  );
};

export default Home;
