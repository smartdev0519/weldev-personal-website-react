import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";
import ThreeContainer from "../components/view3d/ThreeContainer";

const MainLayouts = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ backgroundColor: "black" }}>
        <Box sx={{ position: "absolute", zIndex: 1 }}>
          <ThreeContainer />
        </Box>
        <Box sx={{ position: "absolute", zIndex: 2, width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayouts;
