import React from "react";
import { SubTitleBox } from "../../Details";
import {
  Box,
  Typography,
  Stack,
  Divider,
  useTheme,
  styled,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.font1,
  color: theme.fontColor.primary,
  marginTop: 5,
}));

const datas = [
  {
    skill: "WordPress",
    percent: 95,
  },
  {
    skill: "JavaScript",
    percent: 80,
  },
  {
    skill: "Angular",
    percent: 90,
  },
];

const EducationTimeLine = () => {
  const theme = useTheme();
  return (
    <SubTitleBox title1="Education" title2="Timeline">
      <Timeline>
        {datas.map((item) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ background: theme.selectedColor }} />
            </TimelineSeparator>
            <TimelineContent>Secondary</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </SubTitleBox>
  );
};

export default EducationTimeLine;
