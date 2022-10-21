import React from "react";
import { Box, Divider, Grid, Typography, useTheme, Stack } from "@mui/material";
import { StyledDivider } from "../../../CustomUi/Divider";
import AboutMeSection from "./AboutMe";
import { CenterBox } from "../Contract";
import QualityService from "./QualityService";
import ProgrammingSkiils from "./ProgramSkills";
import LanguageSkills from "./LanguageSkills";
import EducationTimeLine from "./EducationTimeline";

interface Props {
  children: React.ReactNode;
  title1: string;
  title2: string;
}

export const SubTitleBox = (props: Props) => {
  const { children, title1, title2 } = props;
  const theme = useTheme();
  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
        <Typography
          sx={{
            fontFamily: theme.fontFamily.font1,
            fontWeight: theme.fontWeight,
            color: "white",
            fontSize: theme.fontSize.lg,
          }}
        >
          {title1}&nbsp;&nbsp;
        </Typography>
        <Typography
          sx={{
            fontFamily: theme.fontFamily.font1,
            fontWeight: theme.fontWeight,
            color: theme.selectedColor,
            fontSize: theme.fontSize.lg,
          }}
        >
          {title2}
        </Typography>
      </Box>
      <StyledDivider sx={{ mt: 1, mb: 4 }} />
      {children}
    </Box>
  );
};

const Details = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      sx={{ mx: { md: "auto !important" } }}
    >
      <Grid item xs={12}>
        <AboutMeSection />
      </Grid>
      <Grid item xs={12}>
        <QualityService />
      </Grid>
      <Grid item xs={12}>
        <ProgrammingSkiils />
      </Grid>
      <Grid item xs={12}>
        <LanguageSkills />
      </Grid>
      <Grid item xs={12}>
        <EducationTimeLine />
      </Grid>
    </Grid>
  );
};

export default Details;
