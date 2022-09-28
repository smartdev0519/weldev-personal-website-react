import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: theme.fontSize.lg,
  height: theme.fontSize.lg,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "white",

  "input:hover ~ &": {},
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: "white",
  stroke: "#5A32E1",
  color: "#5A32E1",
  "&:before": {
    display: "block",
    width: theme.fontSize.lg,
    height: theme.fontSize.lg,
    backgroundImage: `url(${CheckIcon})`,
  },
  "input:hover ~ &": {},
}));

// Inspired by blueprintjs
function CircleBpCheckbox2(props: CheckboxProps) {
  const theme = useTheme();
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon>
          <b>
            <CheckIcon
              sx={{
                marginTop: "-7px",
                marginLeft: "2px",
                width: theme.fontSize.md,
                height: theme.fontSize.md,
              }}
            />
          </b>
        </BpCheckedIcon>
      }
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export default CircleBpCheckbox2;
