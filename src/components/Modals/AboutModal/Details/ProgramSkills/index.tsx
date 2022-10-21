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
import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 2,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.selectedColor,
  },
}));

const ProgrammingSkiils = () => {
  const theme = useTheme();
  return (
    <SubTitleBox title1="Programming" title2="Skills">
      <Stack direction="column" spacing={2}>
        {datas.map((item) => (
          <Stack direction="column" spacing={0} key={item.skill}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <StyledTypo key={item.skill}>{item.skill}</StyledTypo>
              <StyledTypo key={item.skill}>{item.percent + "%"}</StyledTypo>
            </Box>
            <BorderLinearProgress variant="determinate" value={item.percent} />
          </Stack>
        ))}
      </Stack>
    </SubTitleBox>
  );
};

export default ProgrammingSkiils;
