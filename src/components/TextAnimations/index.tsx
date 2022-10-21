import { useTheme, styled } from "@mui/material/styles";
import { Box, keyframes } from "@mui/material";
import React from "react";
import { transform } from "typescript";

interface Props {
  children: React.ReactElement;
}

const AnimationBox = styled(Box)(({ theme }) => ({
  background: "transparent",
  //   animation: `${textAnimation1} 3s linear infinite`,
  "& > span": {
    marginTop: "-10px",
  },
}));

const textAnimation1 = keyframes`
    0%{transform: rotateX(0deg);}
    20%{transform: rotateX(-45deg);}
    40%{transform: rotateX(0deg);}
    60%{transform: rotateX(90deg);}
    100%{transform: rotateX(360deg);}
`;

const TextAnimationBox = (props: Props) => {
  const theme = useTheme();
  const { children } = props;
  return <AnimationBox>{children}</AnimationBox>;
};

export default TextAnimationBox;
