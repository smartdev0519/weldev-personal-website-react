import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MyPhoto from "../../assets/images/my-photo.png";
import { useTheme } from "@mui/material";
import { StyledLink } from "../../components/CustomUi/Links";

const info =
  "My name is David Parker. I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge.";
const About = () => {
  const theme = useTheme();
  const [summary, setSummary] = useState<string>(info);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4, lg: 6 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "center" },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${MyPhoto})`,
              width: { xs: 500, md: 350 },
              height: { xs: 400, md: 350 },
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50%",
              borderRadius: "10px",
              mx: { xs: "auto", md: "0" },
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={3} sx={{ textAlign: "left" }}>
            <Typography variant="h2">
              <span style={{ color: "white" }}>{"DAVID"}</span>
              <span style={{ color: theme.selectedColor }}>{" PARKER"}</span>
            </Typography>
            <Typography variant="h5">
              <span style={{ color: "grey" }}>Creative</span>
              <span style={{ color: "white" }}>{" Developer"}</span>
            </Typography>
            <Divider
              sx={{
                background: "transparent",
                borderBottom: "1px dashed grey",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.common.white }}
            >
              {summary}
            </Typography>
            <Box style={{ marginTop: "60px" }}>
              <StyledLink to="/about/detail">Learn More</StyledLink>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
