import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Slide,
  Grow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MyPhoto from "../../assets/images/my-photo.png";
import { useTheme } from "@mui/material";
import { StyledLink } from "../../components/CustomUi/RouteLink";
import { StyledDivider } from "../../components/CustomUi/Divider";
import { BootstrapButton } from "../../components/CustomUi/Buttons/BootstrapButton";
import AboutMeModal from "../../components/Modals/AboutModal";

const info =
  "My name is David Parker. I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge.";
const About = () => {
  const theme = useTheme();
  const [summary, setSummary] = useState<string>(info);
  const [isMount, setIsMount] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, [isOpenModal]);

  useEffect(() => {
    setIsMount(true);
  }, []);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 5, md: 10 },
        px: { xs: "5%", md: "100px" },
      }}
      disableGutters
    >
      <Grow
        in={isMount}
        easing={theme.transitions.easing.easeOut}
        timeout={theme.transitions.duration.enteringScreen}
      >
        <Grid container spacing={{ xs: 2, md: 4, lg: 6 }} columns={20}>
          <Grid
            item
            xs={20}
            md={10}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${MyPhoto})`,
                width: { xs: 500, md: 400 },
                height: { xs: 400, md: 350 },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                borderRadius: "10px",
                mx: { xs: "auto", md: "0" },
              }}
            ></Box>
          </Grid>
          <Grid item xs={20} md={10}>
            <Stack direction="column" spacing={3} sx={{ textAlign: "left" }}>
              <Typography variant="h3">
                <span style={{ color: "white" }}>{"DAVID"}</span>
                <span style={{ color: theme.selectedColor }}>{" PARKER"}</span>
              </Typography>
              <Typography variant="h5">
                <span style={{ color: "grey" }}>Creative</span>
                <span style={{ color: "white" }}>{" Developer"}</span>
              </Typography>
              <StyledDivider
                sx={{
                  px: { xs: 0, md: 2 },
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.common.white }}
              >
                {summary}
              </Typography>
              <Box>
                <Box>
                  <BootstrapButton onClick={handleOpenModal}>
                    Learn More
                  </BootstrapButton>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grow>
      <AboutMeModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  );
};

export default About;
