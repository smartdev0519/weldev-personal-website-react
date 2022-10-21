import React from "react";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Grid,
  styled,
} from "@mui/material";
import MyPhoto from "../../../../assets/images/my-photo.png";
import CustomLink from "../../../CustomUi/Link";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Person } from "@mui/icons-material";
import InfoBarWrapper from "./InfoBarWrapper";
import { StyledDivider } from "../../../CustomUi/Divider";
import { BootstrapButton } from "../../../CustomUi/Buttons/BootstrapButton";

export const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const ContractSection = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} px={5} py={0} sx={{}}>
      <Grid item xs={12}>
        <CenterBox>
          <Avatar
            alt="david parker"
            src={MyPhoto}
            sx={{
              width: { xs: 300, md: 110 },
              height: { xs: 300, md: 110 },
              mt: "20%",
            }}
          />
        </CenterBox>
        <CenterBox sx={{ mt: "20px" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            {"DAVID"}&nbsp;
          </Typography>
          <Typography variant="h5" sx={{ color: theme.selectedColor }}>
            {"PARKER"}
          </Typography>
        </CenterBox>
        <CenterBox sx={{ mt: "5px" }}>
          <Typography variant="subtitle1" sx={{ color: "#a2a2a2" }}>
            {"Creative "}&nbsp;
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {" Developer"}
          </Typography>
        </CenterBox>
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <InfoBarWrapper content="David Parker">
          <PersonIcon />
        </InfoBarWrapper>
        <StyledDivider sx={{ my: "5px" }} />
        <InfoBarWrapper content="01.07.1990">
          <CalendarMonthIcon />
        </InfoBarWrapper>
        <StyledDivider sx={{ my: "5px" }} />
        <InfoBarWrapper content="Avon str. 22, NYC, USA">
          <LocationOnIcon />
        </InfoBarWrapper>
        <StyledDivider sx={{ my: "5px" }} />
        <InfoBarWrapper content="+77 022 155 02 02">
          <PhoneIcon />
        </InfoBarWrapper>
        <StyledDivider sx={{ my: "5px" }} />
        <InfoBarWrapper content="example@gmail.com">
          <MailIcon />
        </InfoBarWrapper>
      </Grid>
      <Grid item xs={12}>
        <CenterBox>
          <BootstrapButton sx={{ px: 7, mb: 2 }}>Download CV</BootstrapButton>
        </CenterBox>
      </Grid>
    </Grid>
  );
};

export default ContractSection;
