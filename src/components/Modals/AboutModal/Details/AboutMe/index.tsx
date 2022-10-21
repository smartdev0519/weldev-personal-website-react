import React from "react";
import { SubTitleBox } from "../../Details";
import { Box, Typography, Stack, Divider, useTheme } from "@mui/material";

const AboutMeSection = () => {
  const theme = useTheme();
  return (
    <SubTitleBox title1="About" title2="Me">
      <Typography
        sx={{
          fontFamily: theme.fontFamily.font1,
          color: theme.fontColor.primary,
        }}
      >
        Hello everybody! My name is David Parker. I am a graphic designer, and
        I'm very passionate and dedicated to my work. With 20 years experience
        as a professional a graphic designer, I have acquired the skills and
        knowledge.
      </Typography>
    </SubTitleBox>
  );
};

export default AboutMeSection;
