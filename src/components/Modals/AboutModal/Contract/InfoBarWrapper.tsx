import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Link, LinkProps, Stack, useTheme, Box } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.fontFamily.font1,
  height: "auto",
  background: theme.background.primary.dark,
  color: "white",
  textDecoration: "none",
  textAlign: "center",
  alignSelf: "center",
  transition: "all .3s ease",
  cursor: "pointer",
  "&:hover": {
    color: theme.selectedColor,
  },
}));

interface Props {
  children: React.ReactElement;
  content: string;
  linkProps?: LinkProps;
}

const InfoBarWrapper = (props: Props) => {
  const theme = useTheme();
  const { children, linkProps, content } = props;
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        color: theme.selectedColor,
        width: { xs: "100%", md: "90%" },
      }}
    >
      <Box
        sx={{
          "& > svg": { fontSize: `${theme.fontSize.lg}`, mt: "5px" },
        }}
      >
        {children}
      </Box>
      <StyledLink>{content}</StyledLink>
    </Stack>
  );
};

export default InfoBarWrapper;
