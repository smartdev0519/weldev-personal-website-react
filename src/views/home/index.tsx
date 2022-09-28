import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import useAppTheme from "../../hooks/useAppTheme";
import { Box, Typography, Stack } from "@mui/material";
import { BootstrapButton } from "../../components/CustomUi/Buttons/BootstrapButton";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { PAGES } from "../../constant";
import { StyledLink } from "../../components/CustomUi/Links";

const Home = () => {
  const { selectedColor, setSelectedColor } = useAppTheme();
  const [color, setColor] = useState<string>("");
  const [name, setName] = useState<string>("DAVID PARKER");
  const theme = useTheme();
  const handleChangeText = (value: string) => {
    setColor(value);
  };

  const handleColorSubmit = () => {
    if (setSelectedColor) setSelectedColor(color);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          mt: "10%",
        }}
      >
        <Stack direction="column" spacing={3}>
          <Typography variant="h2">
            <span style={{ color: "white" }}>{"DAVID"}</span>
            <span style={{ color: theme.selectedColor }}>{" PARKER"}</span>
          </Typography>
          <Typography variant="h5">
            <span style={{ color: "grey" }}>Creative</span>
            <span style={{ color: "white" }}>{" Developer"}</span>
          </Typography>
          <Box>
            <StyledLink to="/contract">Get in Touch</StyledLink>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
