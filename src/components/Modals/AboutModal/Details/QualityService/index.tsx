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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.font1,
  color: theme.fontColor.primary,
  alignSelf: "center",
}));

const datas = [
  "Website Development",
  "Digital Experience",
  "Content Marketing",
  "Social Media Design",
  "Shared Web Hosting",
];
const QualityService = () => {
  const theme = useTheme();
  return (
    <SubTitleBox title1="Quality" title2="Service">
      <Stack direction="column" spacing={1}>
        {datas.map((data) => (
          <Stack direction="row" spacing={1}>
            <ArrowRightIcon
              sx={{
                fontSize: theme.fontSize.xl,
                alignSelf: "center",
                color: theme.selectedColor,
              }}
            />
            <StyledTypo key={data}>{data}</StyledTypo>
          </Stack>
        ))}
      </Stack>
    </SubTitleBox>
  );
};

export default QualityService;
