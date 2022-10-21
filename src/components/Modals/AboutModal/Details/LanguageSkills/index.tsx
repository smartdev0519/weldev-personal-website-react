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
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.font1,
  color: theme.fontColor.primary,
  marginTop: 10,
  marginLeft: "auto",
  marginRight: "auto",
}));

const datas = [
  {
    skill: "English",
    percent: 95,
  },
  {
    skill: "Russian",
    percent: 80,
  },
  {
    skill: "Arabic",
    percent: 90,
  },
];

function FacebookCircularProgress(
  props: CircularProgressProps & { value: number }
) {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme.palette.grey[800],
        }}
        size={100}
        thickness={1}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: theme.selectedColor,
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={100}
        thickness={1}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={theme.fontColor.primary}
          fontSize={theme.fontSize.md}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const LanguageSkills = () => {
  const theme = useTheme();
  return (
    <SubTitleBox title1="Language" title2="Skills">
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {datas.map((item) => (
          <Stack direction="column" spacing={0} key={item.skill}>
            <FacebookCircularProgress value={item.percent} />
            <StyledTypo>{item.skill}</StyledTypo>
          </Stack>
        ))}
      </Stack>
    </SubTitleBox>
  );
};

export default LanguageSkills;
