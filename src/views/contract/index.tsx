import React, { useEffect, useState } from "react";
import {
  Container,
  Grow,
  Stack,
  useTheme,
  Box,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { StyledDivider } from "../../components/CustomUi/Divider/index";
import { BootstrapButton } from "../../components/CustomUi/Buttons/BootstrapButton";
import { BootstrapInput } from "../../components/CustomUi/Forms/Input";
import { StyledTextareaElement } from "../../components/CustomUi/Forms/TextArea";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import CustomLink from "../../components/CustomUi/Link";

const Contract = () => {
  const [isMount, setIsMount] = useState<boolean>(false);
  const theme = useTheme();
  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 3, md: 12 },
        px: { xs: "3%", md: "100px" },
      }}
    >
      <Grow
        in={isMount}
        timeout={theme.transitions.duration.enteringScreen}
        easing={theme.transitions.easing.easeOut}
      >
        <Stack
          direction="column"
          spacing={{ xs: 5, md: 8 }}
          sx={{ width: "100%" }}
        >
          <Box>
            <Typography variant="h4">
              <span style={{ color: "white" }}>Get In</span>
              <span style={{ color: theme.selectedColor }}> Touch</span>
            </Typography>
            <StyledDivider sx={{ mt: 2 }} />
          </Box>
          <Box>
            <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} sx={{ mt: 25 }}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
                  <Grid item xs={12}>
                    <CustomLink
                      content="Avon str. 22, NYC, USA"
                      linkProps={{ href: "#" }}
                    >
                      <LocationOnIcon />
                    </CustomLink>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomLink
                      content="+77 022 155 02 02"
                      linkProps={{ href: "#" }}
                    >
                      <PhoneIcon />
                    </CustomLink>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomLink
                      content="example@gmail.com"
                      linkProps={{ href: "#" }}
                    >
                      <MailIcon />
                    </CustomLink>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomLink
                      content="@facebookNick"
                      linkProps={{ href: "#" }}
                    >
                      <FacebookIcon />
                    </CustomLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
                  <Grid item xs={12} md={6}>
                    <BootstrapInput placeholder="Name" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <BootstrapInput placeholder="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextareaElement placeholder="Message" />
                  </Grid>
                  <Grid item xs={12}>
                    <BootstrapButton disableRipple>
                      Submit Message
                    </BootstrapButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grow>
    </Container>
  );
};

export default Contract;
