import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import CheckMark from "./CheckMark";
import { useTheme } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 5,
  width: theme.fontSize.xl,
  height: theme.fontSize.xl,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#3a2a86" : "#3a2a86",

  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#3a2a86" : "#3a2a86",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.button.background1,
  "&:before": {
    display: "block",
    width: theme.fontSize.xl,
    height: theme.fontSize.xl,
  },
  "input:hover ~ &": {
    backgroundColor: theme.button.background1,
  },
}));

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
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
          <CheckMark
            width={theme.fontSize.xl}
            height={theme.fontSize.xl}
            color={"#fff"}
          />
        </BpCheckedIcon>
      }
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export default BpCheckbox;
